# 従業員管理ページ実装計画書

## 概要

会社スコープ向けに従業員管理機能のHTMLモックアップページ6ページを作成し、サイドバーナビゲーションを更新する。

## 作成・変更ファイル一覧

### 1. サイドバー更新
**ファイル**: `sidebar_company.html`

現在の「従業員」メニュー項目（524-535行目）を展開可能なサブメニューに置き換え:
- 従業員管理 (親メニュー、アイコン: `ki-address-book`)
  - 従業員一覧 → `employees.html`
  - 人件費実績 → `payroll_reports.html`
  - 従業員設定履歴 → `employee_payroll_histories.html`
  - 従業員設定インポート → `employee_payroll_import.html`

**動作仕様**: ホバー時にサブメニューを表示

### 2. 新規HTMLページ

| ファイル | ページタイトル | テンプレートベース |
|------|-----------|---------------|
| `employees.html` | 従業員一覧 | `staff.html` |
| `employee_register.html` | 従業員登録 | `supplier_new.html` |
| `employee_detail.html` | 従業員詳細 | `staff.html` + タブ |
| `payroll_reports.html` | 人件費実績 | `staff.html` + タブ |
| `employee_payroll_histories.html` | 従業員設定履歴 | `staff.html` |
| `employee_payroll_import.html` | 従業員設定インポート | `supplier_new.html` |

---

## ページ詳細仕様

### ページ1: employees.html (従業員一覧)
- **パス**: /employees
- **パンくず**: ホーム - 従業員一覧
- **ツールバーボタン**:
  - 従業員登録 → `employee_register.html`
  - CSVインポート → `employee_payroll_import.html`
- **テーブル列**:
  - 名前
  - 従業員コード
  - 所属店舗 (badge-light)
  - ヘルプ先店舗 (badge-light, 複数)
  - 雇用区分 (正社員/パート/アルバイト - badge)
  - 給与単位 (月給/時給 - badge-dark/badge-light-gray)
  - 単位給与額 (通貨, ソート可)
  - 交通費単位 (日額/月額 - badge)
  - 単位交通費 (通貨, ソート可)
  - 所定労働時間 (ソート可)
  - みなし残業時間 (ソート可)
  - アクション (詳細リンク, 削除ボタン)
- **アクション**:
  - 詳細アイコン → `employee_detail.html`
  - 削除アイコン → SweetAlert2確認ダイアログ → 完了トースト

### ページ2: employee_register.html (従業員登録)
- **パス**: /employee_register
- **パンくず**: ホーム - 従業員一覧 - 従業員登録
- **ツールバーボタン**:
  - 従業員一覧へ → `employees.html`
  - CSVインポート → `employee_payroll_import.html`
- **フォーム項目** (基本情報セクション):
  - 名前 (テキスト入力)
  - 従業員コード (テキスト入力)
  - 所属店舗 (単一選択)
  - ヘルプ先店舗 (複数選択)
  - 雇用区分 (単一選択: 正社員/パート/アルバイト)
  - 給与単位 (単一選択: 月給/時給)
  - 単位給与額 (通貨入力、¥プレフィックス付き)
  - 交通費単位 (単一選択: 日額/月額)
  - 単位交通費 (通貨入力、¥プレフィックス付き)
  - **ヘルプ先交通費** (動的フォーム、必須)
    - ヘルプ先店舗選択時に自動表示
    - 各ヘルプ先店舗ごとに交通費を個別設定
    - 通貨入力、¥プレフィックス付き、千単位カンマ区切り
  - 所定労働時間 (数値入力)
  - みなし残業時間 (数値入力)
- **下部ボタン**:
  - キャンセル → `employees.html`
  - 登録 → ローダーアニメーション → 完了トースト → `employees.html`

### ページ3: employee_detail.html (従業員詳細)
- **パス**: /employee_detail
- **パンくず**: ホーム - 従業員一覧 - 従業員詳細
- **ツールバーボタン**: 従業員一覧へ → `employees.html`
- **セクション**:
  1. **基本情報セクション** - 登録フォームと同じ項目の編集フォーム
  2. **設定変更履歴セクション** - 履歴テーブル:
     - 列: 変更反映日時, 雇用区分, 給与単位, 単位給与額, 交通費単位, 単位交通費, 所定労働時間, みなし労働時間, 所属店舗, ヘルプ先店舗, ステータス, 編集日時, 変更ソース
  3. **給与実績セクション** - タブコンテンツ:
     - 月次実績タブ
       - フィルター: 年フィルター、給与計算モード選択、CSVエクスポート
       - **給与計算モード切替**: JavaScriptで列の表示/非表示を切り替え
         - 概算モード: 基本列のみ表示
         - 実績モード: 全列表示（総労働時間、みなし労働時間差分、所属店舗での労働時間、ヘルプ先店舗、ヘルプ時間、ヘルプ人件費、深夜残業時間、深夜残業代を追加表示）
     - 日次実績タブ
       - フィルター: 月フィルター、CSVエクスポート
- **下部ボタン**:
  - 一覧へ戻る → `employees.html`
  - 従業員削除 → 確認モーダル → 完了トースト
  - 更新予約 → 日付選択モーダル
  - 保存・即時更新 → ローダー → 完了トースト → `employees.html`

### ページ4: payroll_reports.html (人件費実績)
- **パス**: /payroll_reports
- **パンくず**: ホーム - 人件費実績
- **ツールバー**: なし
- **タブコンテンツ**:
  1. **月別実績タブ**:
     - フィルター: 年月、給与計算モード、店舗、雇用区分、検索バー
     - CSVエクスポートボタン
     - **給与計算モード切替**: JavaScriptで列の表示/非表示を切り替え
       - 概算モード: 基本列のみ
       - 実績モード: 全列表示
  2. **日別実績タブ**:
     - フィルター: 日時、店舗、雇用区分、検索バー
     - CSVエクスポートボタン
     - 全列表示（実績モードのみ）

### ページ5: employee_payroll_histories.html (従業員設定履歴)
- **パス**: /employee_payroll_histories
- **パンくず**: ホーム - 従業員設定履歴
- **ツールバーボタン**: CSVインポート → `employee_payroll_import.html`
- **テーブルヘッダー**:
  - 左側: 変更ソースフィルター、従業員名検索
  - 右側: 店舗フィルター、雇用区分フィルター、編集日時範囲 (DateRangePicker)、CSVエクスポート
- **テーブル列**: 設定変更履歴と同じ + 名前、従業員ページリンク

### ページ6: employee_payroll_import.html (従業員設定インポート)
- **パス**: /employee_payroll_import
- **パンくず**: ホーム - 従業員設定インポート
- **ツールバーボタン**:
  - 従業員一覧 → `employees.html`
  - 列マッピングテンプレート管理 → `column_mapping_templates.html`
- **フォーム**:
  - データ種類 (単一選択: King of Time/ジョブカン/新規作成)
  - 列マッピングテンプレート (選択時に取り込み列設定に自動適用)
  - CSVファイル (ドラッグ&ドロップエリア)
  - CSV位置合わせ設定 (折りたたみ可能)
    - ヘッダー行、データ開始行、開始列
  - 取り込み列設定テーブル (CSV読み込み時に表示)
- **下部ボタン**:
  - キャンセル → `employees.html`
  - 登録 → ローダー → 完了トースト → `employees.html`

### ページ7: column_mapping_templates.html (列マッピングテンプレート)
- **パス**: /column_mapping_templates
- **パンくず**: ホーム - 従業員設定インポート - 列マッピングテンプレート
- **ツールバーボタン**:
  - 従業員設定インポートへ → `employee_payroll_import.html`
  - テンプレート登録 → モーダル
- **フィルター**: データ種類
- **テーブル列**:
  - テンプレート名
  - データ種類 (badge-light)
  - マッピング数
  - アクション (編集, 削除)
- **モーダル**:
  1. **テンプレート登録**:
     - テンプレート名 (必須)
     - データ種類 (必須): 新規作成（従業員設定）/新規作成（給与設定）/King of Time/ジョブカン
     - 列マッピング設定テーブル (動的行追加)
       - 取込チェックボックス、CSV列名、反映先テーブル、ラクミー列名
  2. **テンプレート編集**: 登録と同じ構造、既存データを読み込み
- **列マッピング表インポートセクション**:
  - カードヘッダー: テンプレートダウンロードボタン
  - ファイルアップロード (ドラッグ&ドロップ)
  - 対応形式: CSV (.csv)、最大10MB
  - インポートボタン (ローディング付き)

---

## 実装ステップ

### ステップ1: サイドバーナビゲーション更新
1. `sidebar_company.html`を編集
2. 「従業員」メニューを展開可能なサブメニューグループに置き換え
3. デスクトップ版(menu-lg-down-accordion)とモバイル版(menu-item-mobile)の両方を追加

### ステップ2: employees.html作成
1. `staff.html`をベースにコピー
2. ページタイトル、パンくずを更新
3. 仕様に合わせてテーブル構造を変更
4. ツールバーボタンを追加
5. DataTables設定を更新
6. SweetAlert2削除確認を追加

### ステップ3: employee_register.html作成
1. `supplier_new.html`をベースにコピー
2. ページ構造を更新
3. 全入力項目のフォームを作成
4. ローディングボタンアニメーションを追加
5. 成功トーストJavaScriptを追加

### ステップ4: employee_detail.html作成
1. 3つのメインセクションを持つページを作成
2. 給与実績セクションのタブ切替を実装
3. フォーム編集機能を追加
4. モーダル/トースト付きの複数アクションボタンを追加
5. **給与計算モード切替機能を実装** (JavaScript)
   - 列に `data-column-mode="actual"` 属性を付与
   - モード選択時に該当列の表示/非表示を切り替え

### ステップ5: payroll_reports.html作成
1. タブベースのレイアウトを作成 (月別/日別)
2. フィルターコントロールを実装
3. 条件付き列を持つデータテーブルを作成
4. **給与計算モード切替機能を実装** (JavaScript)
5. CSVエクスポートボタンとトーストを追加

### ステップ6: employee_payroll_histories.html作成
1. フィルターコントロール付きページを作成
2. 全列を持つDataTableを実装
3. DateRangePickerを追加

### ステップ7: employee_payroll_import.html作成
1. シンプルなフォームページを作成
2. ファイルアップロード/ドラッグ&ドロップエリアを追加
3. ローディング状態付きフォーム送信を追加

### ステップ8: 仕様書ドキュメント作成
1. `/docs/features/employeemgt/implementation_plan.md`を作成
2. 全ページ仕様とモックデータ要件をドキュメント化

---

## モックデータ要件

ランダムモックデータ生成:
- 従業員10-15名（日本人名）
- 店舗5店 (ラクミーフレッシュ渋谷店, 青山店, 新宿店, 沖縄店, 赤坂店)
- 雇用区分混合 (正社員/パート/アルバイト)
- 給与単位混合 (月給/時給)
- 給与額ランダム (月給: 200,000-500,000円、時給: 1,000-1,500円)
- 交通費ランダム (日額: 500-2,000円、月額: 10,000-30,000円)
- 労働時間 (80-160時間)
- 残業時間 (0-30時間)

---

## 使用パターン

### HTML構造
```html
<script>include_sidebar_company();</script>
<script>include_header_company();</script>
```

### DataTables日本語化
```javascript
$("#table_id").DataTable({
  language: {
    "sZeroRecords": "データはありません。",
    "sInfo": " _TOTAL_ 件中 _START_ から _END_ まで表示",
    // ... 標準日本語設定
  },
});
```

### バッジスタイル
- `badge badge-light` - 店舗名
- `badge badge-dark` - 月給
- `badge badge-light-gray` - 時給
- 雇用区分は適切な色を使用

### アクションボタン
```html
<button class="btn btn-sm btn-icon btn-light-dark w-35px h-35px">
  <i class="ki-duotone ki-eye fs-3">...</i>
</button>
<button class="btn btn-sm btn-icon btn-light-danger w-35px h-35px">
  <i class="ki-duotone ki-trash fs-3">...</i>
</button>
```

### ローディングボタンアニメーション
```html
<button class="btn btn-primary">
  <span class="indicator-label">登録</span>
  <span class="indicator-progress">登録中...
    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
  </span>
</button>
```

### SweetAlert2パターン
- 削除確認: `Swal.fire({ icon: "warning", ... })`
- 成功トースト: `Swal.fire({ icon: "success", text: "完了しました" })`

### 給与計算モード切替機能（実績モード列表示/非表示）
```javascript
function togglePayrollMode(mode) {
  const actualColumns = document.querySelectorAll('[data-column-mode="actual"]');
  actualColumns.forEach(col => {
    col.style.display = mode === 'actual' ? '' : 'none';
  });
}
```

---

## ファイル一覧

| アクション | ファイルパス |
|--------|-----------|
| 変更 | `sidebar_company.html` |
| 作成 | `employees.html` |
| 作成 | `employee_register.html` |
| 作成 | `employee_detail.html` |
| 作成 | `payroll_reports.html` |
| 作成 | `employee_payroll_histories.html` |
| 作成 | `employee_payroll_import.html` |
| 作成 | `column_mapping_templates.html` |
| 作成 | `docs/features/employeemgt/implementation_plan.md` |
