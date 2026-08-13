# ラクミーウェブ経営管理 ― 従業員管理ページ 仕様モック

会社スコープ（V69）向け **従業員管理機能** のデザインモック・仕様書・検証プラン一式。

🌐 **公開ページ**: https://suguru789987.github.io/rakmy-employee-mgmt-spec/


## 資料を直したときにやること

```bash
python3 check_all.py     # 77項目の整合性チェック。NG が 0 件になるまで直す
```

**いつ流すか**

| タイミング | 理由 |
|---|---|
| 資料（tsv / md / xlsx / html）を直した直後 | 直した本人がその場で気づける |
| commit するとき | `hooks/pre-commit` を入れていれば自動で走り、NGなら commit が止まる |
| デスクトップへ配る前 | 配布物と手元がずれていないか確認する |
| 検証当日の朝 | 当日使う資料が全部そろって整合しているか確認する |

**pre-commit フックの導入**（一度だけ）

```bash
cp hooks/pre-commit .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit
```

資料に触れた commit のときだけ検査が走ります。どうしても記録したいときは `git commit --no-verify`。

**検査でわかること・わからないこと**

わかるのは「資料どうしの照合で機械的に判定できること」だけです。件数のズレ、参照先の不在、ID の重複、算式の書き分かれ、Excel と TSV の食い違い、デスクトップとの未同期などは止められます。

一方で、**判断そのものが変わったとき**（例：判断7の深夜割増が1.5から変わる）は、資料が三者とも同じ値で揃っていれば検査は通ってしまいます。値を直すのは人の仕事です。仕様そのものの誤りや、モックと実装のずれも同じです。

## 出所
- `rakmy/rakmy_new_design2022` ブランチ `feature/eemgt2`（給与実績一覧・従業員詳細を強化した最新版）の
  `docs/features/employeemgt/employee_management_system_specification_designmock.md` と
  従業員管理モックHTML（`employees.html` 他）を、**公開用に再構成**したもの。
  ※モック画面は eemgt2 の最新版を反映済み（payroll_reports 大幅更新ほか）。

## 2026-08-03 デリバリー（PdM版・引き継ぎ用の3点セット）

| 資料 | 公開URL | ファイル |
|---|---|---|
| **仕様書（PdM版）** | https://suguru789987.github.io/rakmy-employee-mgmt-spec/pdm-spec.html | `20260803_01_従業員管理_仕様書_PdM版.md` |
| **使い方**（定義表・確認表の操作手順） | https://suguru789987.github.io/rakmy-employee-mgmt-spec/howto.html | `20260803_04_受入条件表と確認表の使い方.md` |
| **受入条件 定義表**（60条件・L0/L1/L2） | https://suguru789987.github.io/rakmy-employee-mgmt-spec/acceptance.html | `20260803_02_従業員管理_受入条件表.tsv` |
| **受入条件 確認表**（記入用） | https://suguru789987.github.io/rakmy-employee-mgmt-spec/acceptance-check.html | `20260803_02b_従業員管理_受入条件_確認表.tsv` |
| **検証プラン**（準備11行＋検証49件） | https://suguru789987.github.io/rakmy-employee-mgmt-spec/test-plan.html | `20260803_03_従業員管理_検証プラン.tsv` |
| **ヘルプページ**（サービスマニュアル形式・掲載は判断7/8の確定後） | https://suguru789987.github.io/rakmy-employee-mgmt-spec/help.html | `20260805_ヘルプページ_従業員管理_マニュアル版.md` |
| **実装マイルストーン確認シート**（設計MVPのクリア判定） | https://suguru789987.github.io/rakmy-employee-mgmt-spec/milestone.html | — |
| **コピペ用ページ**（4資料を書式つきでコピー） | https://suguru789987.github.io/rakmy-employee-mgmt-spec/copy.html | — |

仕様書は **概要 → シンプルな画面遷移 → ケース別の遷移フロー → フロー詳細** の順で構成し、経営判断に必要な内容（課題・価値仮説・KPI・スコープ／Non-goal・判断待ち6件・リスク登録簿・Go/No-Go基準・縮退時の最小スコープ）も統合しています。

✅ **判断1・5・6は2026-08-03、判断7・8・9・10は2026-08-07の第1回ジャッジで確定しました。** 算式は確定済みのため、計算の検証（C-）を開始できます。残る未確定は判断2（翌月差額調整の費目）・判断3・4（画面名の統一）の3件で、リリースまでに確定させます。

## 構成
| パス | 内容 |
|---|---|
| `index.html` | トップ（ナビ） |
| `spec.html` / `spec.md` | 仕様書（実装計画書） |
| `verification-plan.html` / `verification-plan.md` | 検証プラン（画面別テストケース） |
| `data/01〜15` | 検証の前提入力データ（店舗/従業員マスタ・履歴・実績・取込CSV・勤務データ・突合シート） |
| `mock/` | モック画面10枚＋サイドバー/ヘッダー＋共有テーマ（Metronic）assets |

## モック画面
| 画面 | ファイル | パス |
|---|---|---|
| 従業員一覧 | `mock/employees.html` | `/employees` |
| 従業員登録 | `mock/employee_register.html` | `/employee_register` |
| 従業員詳細 | `mock/employee_detail.html` | `/employee_detail` |
| 給与実績一覧 | `mock/payroll_reports.html` | `/payroll_reports` |
| 設定インポート | `mock/employee_payroll_import.html` | `/employee_payroll_import` |
| 設定変更履歴一覧 | `mock/employee_payroll_histories.html` | `/employee_payroll_histories` |

## ガバナンス
- 本リポは**デザインモック**。実テーブル名・実列名・顧客PIIを含まない。
- 元アプリの FAX/納品書画像（`assets/media/fax/`）は**除外済み**。氏名・店舗・テナント名はダミー。
- 実データマッピングは private リポ（`rakmy-sales-dashboard-mvp` / `rakumy-screen-mapping`）を参照。
