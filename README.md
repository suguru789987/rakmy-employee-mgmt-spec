# ラクミーウェブ経営管理 ― 従業員管理ページ 仕様モック

会社スコープ（V69）向け **従業員管理機能** のデザインモック・仕様書・検証プラン一式。

🌐 **公開ページ**: https://suguru789987.github.io/rakmy-employee-mgmt-spec/

## 出所
- `rakmy/rakmy_new_design2022` ブランチ `feature/eemgt2`（人件費実績・従業員詳細を強化した最新版）の
  `docs/features/employeemgt/employee_management_system_specification_designmock.md` と
  従業員管理モックHTML（`employees.html` 他）を、**公開用に再構成**したもの。
  ※モック画面は eemgt2 の最新版を反映済み（payroll_reports 大幅更新ほか）。

## 構成
| パス | 内容 |
|---|---|
| `index.html` | トップ（ナビ） |
| `spec.html` / `spec.md` | 仕様書（実装計画書） |
| `verification-plan.html` / `verification-plan.md` | 検証プラン（画面別テストケース） |
| `data/01〜09` | 検証の前提入力データ（店舗/従業員マスタ・履歴・実績・取込CSV） |
| `mock/` | モック画面5枚＋共有テーマ（Metronic）assets |

## モック画面
| 画面 | ファイル | パス |
|---|---|---|
| 従業員一覧 | `mock/employees.html` | `/employees` |
| 従業員登録 | `mock/employee_register.html` | `/employee_register` |
| 従業員詳細 | `mock/employee_detail.html` | `/employee_detail` |
| 人件費実績 | `mock/payroll_reports.html` | `/payroll_reports` |
| 従業員設定インポート | `mock/employee_payroll_import.html` | `/employee_payroll_import` |
| 従業員設定履歴 | （未作成・仕様のみ） | `/employee_payroll_histories` |

## ガバナンス
- 本リポは**デザインモック**。実テーブル名・実列名・顧客PIIを含まない。
- 元アプリの FAX/納品書画像（`assets/media/fax/`）は**除外済み**。氏名・店舗・テナント名はダミー。
- 実データマッピングは private リポ（`rakmy-sales-dashboard-mvp` / `rakumy-screen-mapping`）を参照。
