#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
従業員管理 引継ぎ資料の整合性チェック

使い方:  python3 check_all.py
資料を直したら毎回これを流す。NG が 0 件なら、資料どうしの食い違いは無い。

対象:
  仕様書 / 受入条件表（定義・確認表）/ 検証プラン / 検証データセット / ヘルプページ / 使い方
  それぞれの TSV・Excel・Markdown と、デスクトップの配布物
"""
import csv, re, os, glob, math, collections, sys

try:
    import openpyxl
except ImportError:
    print('openpyxl が必要です: pip3 install openpyxl'); sys.exit(1)

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
DESK = os.path.expanduser('~/Desktop/従業員管理_20260804/')

F_SPEC = '20260803_01_従業員管理_仕様書_PdM版.md'
F_AC   = '20260803_02_従業員管理_受入条件表.tsv'
F_CHK  = '20260803_02b_従業員管理_受入条件_確認表.tsv'
F_PLAN = '20260803_03_従業員管理_検証プラン.tsv'
F_HOW  = '20260803_04_受入条件表と確認表の使い方.md'
F_HELP = '20260805_ヘルプページ_従業員管理_マニュアル版.md'
X_DEF  = '20260805_従業員管理_00_定義表.xlsx'
X_CHK  = '20260805_従業員管理_01_確認表.xlsx'
X_PLAN = '20260805_従業員管理_02_検証プラン.xlsx'
X_DATA = '20260805_従業員管理_04_検証データセット.xlsx'
X_HELP = '20260805_従業員管理_05_ヘルプページ.xlsx'
X_HOW  = '20260805_従業員管理_使い方.xlsx'

RE_TID = r'\b[SCTR]-[A-Z]?\d+\b'          # S-01 T-D04 C-008 R-02
RE_AC  = r'\bAC-\d+\b'

results = []          # (区分, 見出し, ok, 詳細)


def check(cat, name, ok, detail=''):
    results.append((cat, name, bool(ok), detail))


def T(p):
    with open(p, encoding='utf-8-sig') as f:
        return list(csv.DictReader(f, delimiter='\t'))


def D(p):
    d = '\t' if p.endswith('.tsv') else ','
    with open(p, encoding='utf-8-sig') as f:
        return list(csv.DictReader(f, delimiter=d))


def lines_needed(text, width):
    if not text:
        return 1
    n = 0
    for seg in str(text).split('\n'):
        w = sum(2 if ord(c) > 0x7f else 1 for c in seg)
        n += max(1, math.ceil(w / max(4, width - 2)))
    return n


# ============================================================ 1. ファイル
def c1_files():
    need = [F_SPEC, F_AC, F_CHK, F_PLAN, F_HOW, F_HELP, X_DEF, X_CHK, X_PLAN, X_DATA, X_HELP, X_HOW]
    miss = [f for f in need if not os.path.exists(f)]
    check('1 ファイル', '必要な資料が揃っている', not miss, f'欠落: {miss}' if miss else f'{len(need)}件')

    files = sorted(glob.glob('data/*'))
    check('1 ファイル', 'データセットが19ファイル', len(files) == 19, f'{len(files)}ファイル')

    nobom = []
    for p in glob.glob('*.tsv') + glob.glob('data/*'):
        with open(p, 'rb') as f:
            if f.read(3) != b'\xef\xbb\xbf':
                nobom.append(os.path.basename(p))
    check('1 ファイル', 'TSV/CSVがBOM付き（Excelで文字化けしない）', not nobom, f'BOM無し: {nobom}' if nobom else '全22件')

    if os.path.isdir(DESK):
        import hashlib
        h = lambda p: hashlib.md5(open(p, 'rb').read()).hexdigest()
        diff = [f for f in need if os.path.exists(DESK + f) and h(f) != h(DESK + f)]
        absent = [f for f in need if not os.path.exists(DESK + f)]
        dd = [f for f in os.listdir('data')
              if not os.path.exists(DESK + 'data/' + f) or h('data/' + f) != h(DESK + 'data/' + f)]
        check('1 ファイル', 'デスクトップと内容が一致', not (diff or absent or dd),
              f'差分:{diff} 未配置:{absent} data:{dd}' if (diff or absent or dd) else '13件＋data19件')
    else:
        check('1 ファイル', 'デスクトップの配布先が存在', False, DESK)


# ============================================================ 2. 受入条件
def c2_acceptance():
    ac, chk = T(F_AC), T(F_CHK)
    ws = openpyxl.load_workbook(X_CHK).active
    xl = [ws.cell(r, 4).value for r in range(13, 64) if ws.cell(r, 4).value]

    check('2 受入条件', '件数が3資料で一致（51件）',
          len(ac) == len(chk) == len(xl) == 51, f'定義{len(ac)} 確認表{len(chk)} Excel{len(xl)}')

    s1, s2, s3 = {a['条件ID'] for a in ac}, {a['条件ID'] for a in chk}, set(xl)
    check('2 受入条件', '条件IDの集合が一致', s1 == s2 == s3, f'差分 {(s1 ^ s2) | (s1 ^ s3)}')

    m = {a['条件ID']: a for a in ac}
    bad = []
    for r in range(13, 64):
        i = ws.cell(r, 4).value
        if not i:
            continue
        for col, key in [(5, '判定レベル'), (6, '満たすべき状態'), (7, '合格基準（定量）'), (10, '対象画面')]:
            if ws.cell(r, col).value != m[i][key]:
                bad.append(f'{i}:{key}')
    check('2 受入条件', 'ExcelとTSVの中身が一致', not bad, f'{bad[:5]}' if bad else '51条件×4項目')

    lv = collections.Counter(a['判定レベル'] for a in ac)
    check('2 受入条件', 'L0=4 / L1=40 / L2=7',
          lv['L0 リリース不可'] == 4 and lv['L1 MVP必須'] == 40 and lv['L2 次段階'] == 7, dict(lv))

    # Excel の集計式が合否列を指しているか
    f5 = str(ws.cell(5, 6).value or '')
    hd = None
    for c in range(1, ws.max_column + 1):
        if ws.cell(12, c).value == '合否':
            hd = openpyxl.utils.get_column_letter(c)
    check('2 受入条件', '集計式が合否列を指している', hd and f'${hd}$13:${hd}$63' in f5, f'合否={hd} 式={f5[:60]}')

    dv = [str(d.sqref) for d in ws.data_validations.dataValidation]
    check('2 受入条件', '合否がOK/NG/対象外のプルダウン', any(hd and hd in x for x in dv), dv)


# ============================================================ 3. 検証プラン
def c3_plan():
    tp = T(F_PLAN)
    ws = openpyxl.load_workbook(X_PLAN).active
    check('3 検証プラン', '75行（準備11＋検証64）',
          len(tp) == 75 and ws.max_row - 2 == 75, f'TSV{len(tp)} Excel{ws.max_row-2}')
    check('3 検証プラン', '1シート構成', len(openpyxl.load_workbook(X_PLAN).sheetnames) == 1,
          openpyxl.load_workbook(X_PLAN).sheetnames)

    need_cols = ['段階', '検証ID', '検証内容', '操作・前提条件', '使用する検証データ', '期待値',
                 'スクショファイル名', 'スクショ（撮るもの）', 'スクショ貼付欄', '画面', '確認ポイント',
                 'ヘルプページ該当箇所', '対応受入条件', '実際の値', '判定', '所見・気づき', '実施日', '実施者', '計算根拠']
    miss = [c for c in need_cols if c not in tp[0]]
    check('3 検証プラン', '必要な列が揃っている', not miss, f'欠落 {miss}' if miss else f'{len(tp[0])}列')

    ops = [r for r in tp if r['段階'] != '準備']
    rules = [
        ('期待値に確認場所が明示', lambda r: r['期待値'].startswith('【確認場所')),
        ('期待値が判定可能', lambda r: bool(re.search(r'\d|=0|されない|される|一致|変わらない|残らない', r['期待値']))),
        ('画面が具体的（18字以上）', lambda r: len(r['画面']) >= 18),
        ('確認ポイントがある', lambda r: len(r['確認ポイント']) >= 6),
        ('使用する検証データが記入', lambda r: len(r['使用する検証データ']) >= 5),
        ('スクショの撮るものが記入', lambda r: len(r['スクショ（撮るもの）']) >= 8),
        ('受入条件が紐づく', lambda r: bool(re.search(RE_AC, r['対応受入条件'])) or r['対応受入条件'].startswith('（') or r['対応受入条件'] == '-'),
        ('ヘルプページが紐づく', lambda r: '＞' in r['ヘルプページ該当箇所'] or r['ヘルプページ該当箇所'].startswith('（')),
        ('計算根拠がある', lambda r: len(r['計算根拠']) >= 6),
    ]
    for name, f in rules:
        bad = [r['検証ID'] for r in ops if not f(r)]
        check('3 検証プラン', name, not bad, f'{len(ops)-len(bad)}/{len(ops)} 不足:{bad[:5]}')


# ============================================================ 4. 紐付け
def c4_links():
    tp, chk, ac = T(F_PLAN), T(F_CHK), T(F_AC)
    ids = {r['検証ID'] for r in tp}
    acid = {a['条件ID'] for a in ac}

    bad = [(r['検証ID'], x) for r in tp for x in re.findall(RE_AC, r['対応受入条件']) if x not in acid]
    check('4 紐付け', '検証プラン→受入条件の参照が実在', not bad, bad[:5])

    bad = [(k['条件ID'], x) for k in chk for x in re.findall(RE_TID, k['検証ID']) if x not in ids]
    check('4 紐付け', '確認表→検証プランの参照が実在', not bad, bad[:5])

    fwd = collections.defaultdict(set)
    for r in tp:
        for a in re.findall(RE_AC, r['対応受入条件']):
            fwd[a].add(r['検証ID'])
    bwd = {k['条件ID']: set(re.findall(RE_TID, k['検証ID'])) for k in chk}
    diff = [a for a in acid if fwd.get(a, set()) != bwd.get(a, set())]
    check('4 紐付け', '双方向の紐付けが一致', not diff,
          f'不一致 {[(a, sorted(fwd.get(a,set())), sorted(bwd.get(a,set()))) for a in diff[:3]]}')

    uncovered = sorted(acid - set(fwd))
    l2only = all(next(a['判定レベル'] for a in ac if a['条件ID'] == x).startswith('L2') for x in uncovered) if uncovered else True
    check('4 紐付け', '検証が無い条件はL2のみ', l2only, f'{uncovered}')

    # ヘルプ見出しの実在
    hp = open(F_HELP, encoding='utf-8').read()
    heads = set(re.findall(r'^### (.+)$', hp, re.M))
    bad = []
    for r in tp:
        v = r['ヘルプページ該当箇所']
        if not v or v.startswith('（'):
            continue
        for part in [x.strip() for x in v.split('／') if x.strip()]:
            sec = part.split('＞')[-1].strip()
            if sec not in heads:
                bad.append((r['検証ID'], part))
    check('4 紐付け', '検証プランのヘルプ参照が実在', not bad, bad[:5])

    ws = openpyxl.load_workbook(X_CHK).active
    hcol = next((c for c in range(1, ws.max_column + 1) if ws.cell(12, c).value == 'ヘルプページ該当箇所'), None)
    bad = []
    if hcol:
        for r in range(13, 64):
            v = str(ws.cell(r, hcol).value or '')
            for part in [x.strip() for x in v.split('／') if x.strip()]:
                sec = part.split('＞')[-1].strip()
                if sec and sec not in heads:
                    bad.append((ws.cell(r, 4).value, part))
    check('4 紐付け', '受入条件Excelのヘルプ参照が実在', hcol and not bad, bad[:5] if bad else f'列{hcol}')

    # 実装レビュー
    need = [a['条件ID'] for a in ac if a['確認方法'] == '操作＋実装レビュー']
    m = {k['条件ID']: k['検証ID'] for k in chk}
    miss = [x for x in need if not re.search(r'R-\d+', m.get(x, ''))]
    check('4 紐付け', '実装レビュー13条件にR-が紐づく', not miss, f'{len(need)}件中 不足{miss}')


# ============================================================ 5. 実行順
def c5_order():
    tp = T(F_PLAN)
    o = {r['検証ID']: i for i, r in enumerate(tp)}
    for x in ['T-S04', 'T-D07']:
        check('5 実行順', f'{x} が締め済みの区間内（T-S03〜T-S05）',
              o['T-S03'] < o[x] < o['T-S05'], f"S03={o['T-S03']} {x}={o[x]} S05={o['T-S05']}")
    check('5 実行順', 'T-A08（勤怠取込）が締めより前', o['T-A08'] < o['T-S03'])
    calc = [r['検証ID'] for r in tp if r['段階'] == '計算']
    check('5 実行順', 'C-000が計算の先頭', calc[0] == 'C-000', calc[:3])
    check('5 実行順', 'C-008が計算の最後（5月の金額を変えるため）', calc[-1] == 'C-008', calc[-3:])
    check('5 実行順', '移行検証の後にC-000で初期化', o['C-000'] > o['T-Z03'])

    # 削除対象がマスタのみの従業員か
    used = collections.defaultdict(set)
    for f in glob.glob('data/*'):
        for r in D(f):
            for k in ('従業員コード', 'スタッフコード'):
                if r.get(k):
                    used[r[k]].add(os.path.basename(f)[:2])
    safe = {e for e, s in used.items() if s == {'02'}}
    dels = [(r['検証ID'], re.findall(r'EMP-\d+', r['操作・前提条件']))
            for r in tp if '削除' in r['操作・前提条件'] and r['段階'] != '準備' and r['検証ID'].startswith(('T-L', 'T-D'))]
    bad = [(i, e) for i, es in dels for e in es if e not in safe]
    check('5 実行順', '削除対象がマスタのみの従業員', not bad, f'安全={sorted(safe)} 指定={dels}')


# ============================================================ 6. データセット
def c6_data():
    emp = {r['従業員コード']: r for r in D('data/02_従業員マスタ.tsv')}
    shops = {r['店舗ID'] for r in D('data/01_店舗マスタ.tsv')}
    m = D('data/05_月次給与実績.tsv')

    # 参照整合
    bad = []
    for f in glob.glob('data/*'):
        for i, r in enumerate(D(f), 2):
            c = r.get('従業員コード') or r.get('スタッフコード')
            if c and c not in emp and not re.match(r'EMP-(013|014|015|099)$', c):
                bad.append(f'{os.path.basename(f)}:{i}:{c}')
    check('6 データ', '従業員コードがマスタに実在', not bad, bad[:5])

    # 日次→月次
    agg = collections.defaultdict(lambda: {'h': 0.0, 'help': 0.0, 'n': 0.0})
    for r in D('data/13_勤務データ_2026-05_全稼働日.tsv'):
        a = agg[r['従業員コード']]
        a['h'] += float(r['実働時間']); a['help'] += float(r['ヘルプ時間'] or 0); a['n'] += float(r['深夜残業時間'] or 0)
    bad = []
    for r in m:
        a = agg.get(r['従業員コード'])
        if not a:
            bad.append(f"{r['従業員コード']}:日次なし"); continue
        for col, k in [('総労働時間', 'h'), ('ヘルプ時間', 'help'), ('深夜残業時間', 'n')]:
            if abs(float(r[col]) - a[k]) > 0.01:
                bad.append(f"{r['従業員コード']}:{col}")
    check('6 データ', 'data/13の日次合計＝data/05の月次', not bad, bad[:5] or f'{len(m)}名')

    g = collections.Counter()
    for r in D('data/06_日次給与実績.tsv'):
        g[r['従業員コード']] += int(r['日次人件費'])
    bad = [r['従業員コード'] for r in m if g[r['従業員コード']] != int(r['実績給与'])]
    check('6 データ', 'data/06の日次人件費合計＝実績給与', not bad, bad or f'全社{sum(g.values()):,}円')

    # 算式
    bad = []
    for r in m:
        e = emp[r['従業員コード']]
        base = int(e['単位給与額']) / float(e['所定労働時間']) if e['給与単位'] == '月給' else float(e['単位給与額'])
        if int(r['概算給与']) + int(r['深夜残業代']) + int(r['みなし超過残業代']) != int(r['実績給与']):
            bad.append(f"{r['従業員コード']}:実績給与")
        if float(r['総労働時間']) > 0:
            hp = round(int(r['実績給与']) * float(r['ヘルプ時間']) / float(r['総労働時間']))
            if abs(int(r['ヘルプ人件費']) - hp) > 2:
                bad.append(f"{r['従業員コード']}:ヘルプ人件費")
        if abs(float(r['深夜残業時間'])) > 0:
            if abs(int(r['深夜残業代']) - int(base * 1.5 * float(r['深夜残業時間']))) > 1:
                bad.append(f"{r['従業員コード']}:深夜残業代")
    check('6 データ', '確定した算式で全行を再現できる', not bad, bad[:5])

    # 検証プランの金額が data/05 と矛盾しないか
    vals = set()
    for r in m:
        for c in ['概算給与', '深夜残業代', 'みなし超過残業代', '実績給与', 'ヘルプ人件費', '通勤交通費']:
            vals.add(f'{int(r[c]):,}')
    vals.add(f"{sum(int(r['実績給与']) for r in m):,}")
    KNOWN = {'340,000', '360,000', '410,000', '290,000', '332,727', '352,286', '334,286', '147,000', '350,000', '320,000'}
    bad = []
    for r in T(F_PLAN):
        for num in set(re.findall(r'\d{1,3}(?:,\d{3})+', r['期待値'] + r['操作・前提条件'])):
            if 100000 <= int(num.replace(',', '')) <= 2000000 and num not in vals and num not in KNOWN:
                bad.append(f"{r['検証ID']}:{num}")
    check('6 データ', '検証プランの金額がdata/05と整合', not bad, bad[:5])

    # データセットExcel
    wb = openpyxl.load_workbook(X_DATA); ws = wb['00_目次']
    bad = []
    for r in range(5, 30):
        name = ws.cell(r, 1).value
        if not name:
            break
        real = len(D('data/' + name))
        sn = name.rsplit('.', 1)[0][:31]
        srow = wb[sn].max_row - 3 if sn in wb.sheetnames else -1
        if not (int(ws.cell(r, 2).value) == real == srow):
            bad.append(f'{name}:目次{ws.cell(r,2).value}/実{real}/シート{srow}')
    check('6 データ', 'データセットExcelの行数が実データと一致', not bad, bad[:5] or '19ファイル')


# ============================================================ 7. ヘルプ
def c7_help():
    hp = open(F_HELP, encoding='utf-8').read()
    h2 = re.findall(r'^## (.+)$', hp, re.M)
    check('7 ヘルプ', '大項目が 目次／操作手順／ケース別／よくあるご質問',
          h2 == ['目次', '操作手順', 'ケース別', 'よくあるご質問'], h2)

    heads = re.findall(r'^### (.+)$', hp, re.M)
    toc = re.search(r'## 目次\n\n\|[\s\S]*?\n\n', hp)
    check('7 ヘルプ', '目次がある', bool(toc))

    FLOW = {1: ['設定インポート'], 2: ['従業員登録'], 3: ['予約'], 4: ['従業員設定履歴'],
            5: ['月別実績'], 6: ['締め'], 7: ['締め済み期間の翌日以降'], 8: ['設定・実績エクスポート'],
            9: ['設定取込データ'], 10: ['実績データ取込'], 11: ['従業員設定']}
    miss = [n for n, ks in FLOW.items() if not any(k in hp for k in ks)]
    check('7 ヘルプ', '仕様書の11フローを網羅', not miss, f'不足フロー{miss}')

    shots = re.findall(r'^📸 (.+)$', hp, re.M)
    check('7 ヘルプ', '撮影位置が明示されている', len(shots) >= 10, f'{len(shots)}箇所')

    NG = ['会社スコープの機能です', 'BOM付き', 'バッジ濃色', '移動元']
    hit = [w for w in NG if w in hp.split('-->')[1]]
    check('7 ヘルプ', '社内用語・仕様専用の記述が残っていない', not hit, hit)

    check('7 ヘルプ', 'ASCII罫線の図が無い', not re.search(r'[├└│─┌┐┘┬┴┼]', hp))


# ============================================================ 8. 件数表記
def c8_counts():
    ac, tp = T(F_AC), T(F_PLAN)
    n_data = len(glob.glob('data/*'))
    how = open(F_HOW, encoding='utf-8').read()
    spec = open(F_SPEC, encoding='utf-8').read()

    check('8 件数表記', f'使い方が data/ {n_data}ファイル と書いている',
          f'{n_data}ファイル' in how, re.findall(r'`data/` \d+ファイル', how))
    check('8 件数表記', f'仕様書が {n_data}ファイル と書いている',
          f'{n_data}ファイル' in spec, re.findall(r'\*\*\d+ファイル\*\*', spec))

    ws = openpyxl.load_workbook(X_DEF).active
    txt = '\n'.join(str(ws.cell(r, c).value or '') for r in range(1, 60) for c in range(1, 5))
    check('8 件数表記', f'定義表が data/01〜{n_data} と書いている', f'01〜{n_data}' in txt,
          re.findall(r'data/01〜\d+', txt))

    prep = sum(1 for r in tp if r['段階'] == '準備')
    ws2 = openpyxl.load_workbook(X_PLAN).active
    note = str(ws2.cell(1, 1).value or '')
    check('8 件数表記', f'検証プランの注記が 準備{prep}行＋検証{len(tp)-prep}ケース',
          f'準備{prep}行' in note and f'検証{len(tp)-prep}ケース' in note, note[:40])

    lv = collections.Counter(a['判定レベル'] for a in ac)
    for k, v in lv.items():
        lab = k.split()[0]
        check('8 件数表記', f'使い方が {lab}={v}件 と書いている', f'{v}件' in how, k)


# ============================================================ 9. 体裁
def c9_layout():
    for path, cols in [(X_PLAN, None), (X_CHK, None)]:
        ws = openpyxl.load_workbook(path).active
        bad = 0
        hrow = 2 if path == X_PLAN else 12
        for r in range(hrow + 1, ws.max_row + 1):
            avail = int((ws.row_dimensions[r].height or 15) // 15)
            for c in range(1, ws.max_column + 1):
                cell = ws.cell(r, c)
                if not cell.alignment or not cell.alignment.wrap_text:
                    continue
                w = ws.column_dimensions[openpyxl.utils.get_column_letter(c)].width or 10
                if lines_needed(cell.value, w) > avail:
                    bad += 1
        check('9 体裁', f'{os.path.basename(path)} で文字が潰れていない', not bad, f'{bad}箇所')


# ============================================================ 10. ID・連番
def c10_ids():
    ac, tp, chk = T(F_AC), T(F_PLAN), T(F_CHK)

    n = [int(a['条件ID'].split('-')[1]) for a in ac]
    dup = [k for k, v in collections.Counter(n).items() if v > 1]
    check('10 ID・連番', '受入条件IDに重複が無い', not dup, f'重複 {dup}')
    gap = sorted(set(range(min(n), max(n) + 1)) - set(n))
    check('10 ID・連番', f'受入条件IDが連番（AC-{min(n)}〜AC-{max(n)}・{len(n)}件）', not gap, f'欠番 {gap}')

    ids = [r['検証ID'] for r in tp]
    dup = [k for k, v in collections.Counter(ids).items() if v > 1]
    check('10 ID・連番', '検証IDに重複が無い', not dup, f'重複 {dup}')

    dupc = [k for k, v in collections.Counter(a['条件ID'] for a in chk).items() if v > 1]
    check('10 ID・連番', '確認表の条件IDに重複が無い', not dupc, f'重複 {dupc}')

    # 検証IDの欠番は「統合で空いた番号」。参照が壊れるので詰めない。件数だけ記録する
    miss = {}
    for pre in ['S', 'C', 'R', 'T-L', 'T-R', 'T-D', 'T-H', 'T-A', 'T-S', 'T-I', 'T-E', 'T-N', 'T-Z']:
        g = sorted(int(x.rsplit('-', 1)[1]) for x in ids if x.startswith(pre + '-') and x.rsplit('-', 1)[1].isdigit())
        if g:
            gp = sorted(set(range(min(g), max(g) + 1)) - set(g))
            if gp:
                miss[pre] = gp
    check('10 ID・連番', '検証IDの欠番が使い方に説明されている',
          ('欠番' in open(F_HOW, encoding='utf-8').read()) or not miss,
          f'欠番あり {miss}（統合で空いた番号。詰めると参照が壊れる）')

    dn = sorted(int(os.path.basename(f)[:2]) for f in glob.glob('data/*'))
    gap = sorted(set(range(min(dn), max(dn) + 1)) - set(dn))
    dup = [k for k, v in collections.Counter(dn).items() if v > 1]
    check('10 ID・連番', f'データセットが連番（{min(dn):02d}〜{max(dn):02d}）', not gap and not dup, f'欠番{gap} 重複{dup}')

    bad = [(r['検証ID'], x) for r in tp for x in re.findall(r'\bS-\d+\b', r['初期設定（前提データ）']) if x not in set(ids)]
    check('10 ID・連番', '前提に書いた準備IDが実在', not bad, bad[:5])

    bad = [(r['検証ID'], r['スクショファイル名']) for r in tp
           if r['スクショファイル名'] and r['スクショファイル名'] != r['検証ID'] + '.png']
    check('10 ID・連番', 'スクショ名が「検証ID.png」', not bad, bad[:5])

    bad = [f"data/{x}" for r in tp for x in re.findall(r'data/(\d{2})', r['操作・前提条件'] + r['使用する検証データ'])
           if not glob.glob(f'data/{x}_*')]
    check('10 ID・連番', '本文が参照するdataファイルが実在', not bad, sorted(set(bad))[:5])


# ============================================================ 11. 資料間の言い回し
def c11_wording():
    spec = open(F_SPEC, encoding='utf-8').read()
    help_ = open(F_HELP, encoding='utf-8').read()
    tp = T(F_PLAN)
    plan_txt = '\n'.join(r['計算根拠'] + r['期待値'] for r in tp)

    FORMULA = [
        ('基礎時給', ['単位給与額 ÷ 所定労働時間', '単位給与額÷所定労働時間']),
        ('実績給与', ['概算給与 ＋ 深夜残業代 ＋ みなし超過残業代', '概算給与＋深夜残業代＋みなし超過残業代']),
        ('ヘルプ人件費', ['実績給与 × ヘルプ時間 ÷ 総労働時間', '実績給与×ヘルプ時間÷総労働時間']),
        ('総支給額', ['実績給与 ＋ 交通費', '実績給与＋交通費']),
    ]
    for name, pats in FORMULA:
        ok_s = any(p in spec for p in pats)
        ok_h = any(p in help_ for p in pats)
        check('11 言い回し', f'{name}の算式が仕様書とヘルプで一致', ok_s and ok_h, f'仕様書{ok_s} ヘルプ{ok_h}')

    check('11 言い回し', '深夜割増1.5が3資料で一致',
          '1.5' in spec and '1.5' in help_ and '1.5' in plan_txt)

    # 暫定の判断がヘルプの掲載前チェックに残っているか
    note = help_.split('-->')[0]
    check('11 言い回し', 'ヘルプの掲載前チェックに判断7・8の暫定が明記',
          '判断7' in note and '判断8' in note, note[:60])
    check('11 言い回し', '検証プランにも判断7が暫定と書かれている', '判断7（暫定）' in plan_txt)

    # 対象月
    check('11 言い回し', '検証の対象月が2026-05で揃っている',
          sum(1 for r in tp if '2026-05' in r['操作・前提条件']) >= 5)


# ============================================================ 12. 派生ファイル
def c12_derived():
    md = open(F_HELP, encoding='utf-8').read()
    body = re.sub(r'<!--[\s\S]*?-->\n*', '', md, count=1)
    heads = [h.strip() for h in re.findall(r'^#{2,3} (.+)$', body, re.M)]

    ws = openpyxl.load_workbook(X_HELP).active
    cells = [str(ws.cell(r, 1).value or '') for r in range(1, ws.max_row + 1)]
    miss = [h for h in heads if h not in cells]
    check('12 派生ファイル', 'ヘルプExcelが最新のmdと同じ見出しを持つ', not miss, f'欠落 {miss[:5]}')

    html = open('20260805_従業員管理_05_ヘルプページ.html', encoding='utf-8').read()
    m = re.search(r'<script type="text/plain" id="src">([\s\S]*?)</script>', html)
    embedded = m.group(1) if m else ''
    miss = [h for h in heads if h not in embedded]
    check('12 派生ファイル', 'ヘルプHTMLが最新のmdを埋め込んでいる', bool(m) and not miss, f'欠落 {miss[:5]}')

    # ビューアが参照するファイルの実在
    bad = []
    for f in glob.glob('*.html'):
        h = open(f, encoding='utf-8').read()
        for ref in set(re.findall(r"var f = '([^']+)'", h)) | set(re.findall(r"fetch\(encodeURI\('([^']+)'\)", h)):
            if not os.path.exists(ref):
                bad.append(f'{f} → {ref}')
    check('12 派生ファイル', 'ビューアHTMLの参照先が実在', not bad, bad[:5])


# ============================================================
def main():
    for fn in [c1_files, c2_acceptance, c3_plan, c4_links, c5_order, c6_data, c7_help, c8_counts, c9_layout,
               c10_ids, c11_wording, c12_derived]:
        try:
            fn()
        except Exception as e:
            check(fn.__name__, '検査自体が失敗', False, f'{type(e).__name__}: {e}')

    cat = None
    for c, name, ok, detail in results:
        if c != cat:
            print(f'\n■ {c}')
            cat = c
        mark = '✅' if ok else '❌'
        print(f'  {mark} {name}' + (f'  … {detail}' if (detail and not ok) else (f'  … {detail}' if detail else '')))

    ng = [r for r in results if not r[2]]
    print('\n' + '=' * 64)
    print(f'  検査 {len(results)}件 ／ OK {len(results)-len(ng)}件 ／ NG {len(ng)}件')
    if ng:
        print('\n  要対応:')
        for c, name, _, detail in ng:
            print(f'    ・[{c}] {name}  {detail}')
    else:
        print('  すべての資料が整合しています。')
    print('=' * 64)
    return 1 if ng else 0


if __name__ == '__main__':
    sys.exit(main())
