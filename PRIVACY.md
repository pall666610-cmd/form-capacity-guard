# Privacy Policy / 隱私權政策

Effective date: 2026-05-08

Form Capacity Guard 是一個開源 Google Forms 擴充功能，用於設定表單總回覆上限、選項名額上限，以及滿額後自動關閉表單。

Form Capacity Guard is an open-source Google Forms add-on for limiting form responses and choice capacity.

## 資料存取

本擴充功能只會存取使用者目前開啟並使用此外掛的 Google Form。它可能讀取：

- 表單標題與表單設定。
- 表單回覆數。
- 表單題目標題、選項文字，以及計算選項名額所需的回覆內容。

## 資料儲存

本擴充功能會把設定資料儲存在該表單所屬 Apps Script 專案的 document properties 中，包括：

- 總回覆人數上限。
- 表單關閉訊息。
- 選項名額限制規則。
- 用於恢復選項的原始選項文字。

## 資料分享

本擴充功能不會將表單資料、回覆內容或設定傳送到外部伺服器。本原始碼不包含分析、追蹤、廣告或第三方資料傳輸功能。

## 資料刪除

使用者可以透過解除安裝擴充功能、刪除 Apps Script 專案，或清除 Apps Script 專案中的 properties 來移除已儲存的設定。

## 聯絡方式

如有隱私權問題，請到公開 GitHub repository 開 issue，或使用 Marketplace listing 中列出的維護者聯絡方式。

## English Summary

Form Capacity Guard is an open-source Google Forms add-on for limiting form responses and choice capacity.

### Data accessed

The add-on accesses only the active Google Form where the user installs or opens the add-on. It may read:

- Form title and settings.
- Form response count.
- Form item titles, choice values, and submitted responses needed to calculate option capacity.

### Data stored

The add-on stores configuration in the Apps Script document properties attached to the form, including:

- Response limit.
- Closed form message.
- Choice limit rules.
- Original choice values for restore support.

### Data sharing

The add-on does not send form data, responses, or configuration to any external server. No analytics, tracking, advertising, or third-party data transfer is included in this source code.

### Data deletion

Users can remove stored configuration by uninstalling the add-on, deleting the Apps Script project, or clearing the script properties from the Apps Script project.

### Contact

For privacy questions, open an issue in the public GitHub repository or contact the project maintainer listed in the Marketplace listing.
