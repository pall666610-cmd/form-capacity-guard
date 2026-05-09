# Form Capacity Guard

Form Capacity Guard 是一個開源的 Google Forms 擴充功能，目標是協助表單管理者設定「表單總人數上限」、「選項人數上限」與「達到條件後自動關閉表單」。

本專案目前以 Google Apps Script 實作，已公開到 GitHub，並準備上架 Google Workspace Marketplace，讓其他使用者可以直接安裝使用。

## Public Links

- Repository: https://github.com/pall666610-cmd/form-capacity-guard
- Support: https://github.com/pall666610-cmd/form-capacity-guard/issues
- Privacy Policy: https://github.com/pall666610-cmd/form-capacity-guard/blob/main/PRIVACY.md
- Terms of Service: https://github.com/pall666610-cmd/form-capacity-guard/blob/main/TERMS.md
- Security Policy: https://github.com/pall666610-cmd/form-capacity-guard/blob/main/SECURITY.md
- Support email: linpoting5@gmail.com

## 核心功能

- 表單總回覆人數上限：例如設定 50 人，達到 50 份回覆後自動關閉表單。
- 選項人數上限：例如 A 時段只能 10 人，滿額後自動隱藏該選項。
- 自動關閉表單：當總人數滿額，或所有指定選項都滿額後，停止接受回覆。
- 重新開啟表單：管理者可以重新開啟表單。
- 恢復原始選項：重新開啟時可恢復先前被隱藏的選項。
- 開源與上架準備：包含授權、隱私權政策、服務條款、Marketplace 文案與送審流程。

## 專案檔案

- `Code.gs`：Apps Script 後端邏輯。
- `Sidebar.html`：Google Forms 側邊欄設定介面。
- `appsscript.json`：Apps Script manifest 與 OAuth scopes。
- `LICENSE`：MIT 開源授權。
- `PRIVACY.md`：隱私權政策草稿。
- `TERMS.md`：服務條款草稿。
- `CONTRIBUTING.md`：開源貢獻指南。
- `SECURITY.md`：安全回報指南。
- `MARKETPLACE_SUBMISSION.md`：Google Workspace Marketplace 送審流程。
- `MARKETPLACE_LISTING_DRAFT.md`：Marketplace 頁面文案草稿。
- `TEST_PLAN.md`：實際回測表格與測試紀錄格式。
- `MARKETPLACE_FIELD_CHECKLIST.md`：Google Cloud、OAuth consent screen、Marketplace SDK 欄位清單。
- `MARKETPLACE_ASSETS.md`：custom logo、Marketplace screenshots、demo video 規劃。
- `GITHUB_PREP.md`：GitHub repository 初始化與公開前檢查清單。
- `workflow.md`：每階段執行流程、根因、修復紀錄與下一步。
- `mistakes.md`：錯誤、根因、有效修復方式。
- `SKILLS.md`：是否需要新增或更新 Skill 的判斷與規則草稿。

## 任務執行流程

本專案採用以下流程推進：

1. 規劃任務
2. 設定規則
3. 進行回測
4. 完成測試
5. 正式使用
6. 專案收尾與 Skill 更新判斷

## 一、規劃任務

### 目標

建立一個可上架 Google Workspace Marketplace、可開源給其他人使用的 Google Forms 擴充功能。

### 使用者情境

- 活動報名表需要限制總報名人數。
- 課程、諮詢、看屋時段需要限制每個時段名額。
- 表單管理者希望名額滿後自動關閉表單，避免手動檢查。
- 開源使用者希望可以自行部署、修改或貢獻功能。

### 核心交付物

- 可執行的 Apps Script 擴充功能。
- 可開源的 GitHub 專案結構。
- 可送審 Marketplace 的文件與設定清單。
- 完整測試紀錄。
- 後續維護與 Skill 更新規則。

## 二、設定規則

### 表單總人數限制

- 可開啟或關閉。
- 上限必須是正整數。
- 每次有人送出表單後，自動檢查目前回覆數。
- 若回覆數大於或等於上限，且啟用自動關閉，則關閉表單。
- 關閉表單時顯示管理者設定的自訂訊息。

### 選項人數限制

- 支援下拉選單、單選題、核取方塊。
- 每個題目可設定「每個選項的人數上限」。
- 當某選項被選取次數達到上限，該選項會從表單中隱藏。
- 若所有設定選項都滿額，可選擇是否自動關閉整份表單。
- 系統需要保存原始選項，方便後續重新開啟表單時恢復。

### 權限與資料規則

- 只讀取與修改目前作用中的 Google Form。
- 不將表單資料傳送到外部伺服器。
- 設定資料只存放在 Apps Script document properties。
- OAuth scopes 必須維持最小化。

### 開源與上架規則

- 使用 MIT License。
- 必須提供 Privacy Policy。
- 必須提供 Terms of Service。
- 必須提供 Support URL。
- Marketplace 文案、截圖與實際功能必須一致。
- Google Cloud OAuth 設定、Apps Script manifest、Marketplace SDK scopes 必須一致。

## 三、進行回測

### 回測目標

確認功能在不同表單情境下都能正確運作，並提早找出 Google Forms、Apps Script trigger、OAuth 權限與 Marketplace 送審可能遇到的問題。

### 測試情境 1：空白表單

測試項目：

- 建立新的 Google Form。
- 安裝 Apps Script。
- 開啟側邊欄。
- 儲存總人數上限設定。
- 確認 trigger 成功建立。

通過標準：

- 側邊欄能正常開啟。
- 設定能正常儲存。
- 沒有出現權限錯誤。

### 測試情境 2：總人數上限

測試項目：

- 設定總人數上限為 3 人。
- 送出第 1 筆回覆。
- 送出第 2 筆回覆。
- 送出第 3 筆回覆。

通過標準：

- 第 1、2 筆送出後，表單仍保持開啟。
- 第 3 筆送出後，表單自動關閉。
- 關閉訊息正確顯示。

### 測試情境 3：選項人數上限

測試項目：

- 建立下拉選單或單選題。
- 選項包含 A 時段、B 時段、C 時段。
- 設定每個選項上限為 1。
- 依序送出 A、B、C。

通過標準：

- A 被選滿後，A 從表單中隱藏。
- B 被選滿後，B 從表單中隱藏。
- C 被選滿後，C 從表單中隱藏。
- 若啟用「所有選項滿額後關閉」，表單會自動關閉。

### 測試情境 4：重新開啟表單

測試項目：

- 在表單已關閉後點選「重新開啟表單」。
- 檢查表單是否恢復接受回覆。
- 檢查原始選項是否恢復。

通過標準：

- 表單狀態改為開放。
- 原始選項可以恢復。
- 設定資料仍可正常讀取。

### 測試情境 5：停用限制

測試項目：

- 點選「停用限制」。
- 再送出新的表單回覆。

通過標準：

- 設定狀態變成停用。
- trigger 被移除。
- 新回覆不再觸發自動關閉。

### 測試情境 6：邊界情境

測試項目：

- 已經有回覆的表單。
- 沒有選項題的表單。
- 核取方塊一次選多個選項。
- 多人接近同時送出。
- 表單已關閉後再次執行檢查。

通過標準：

- 不會發生不可恢復錯誤。
- 錯誤訊息能讓使用者理解問題。
- 多人同時送出造成的短暫超額，必須在文件中明確揭露。

## 四、完成測試

### 功能完成標準

- 總人數限制正常。
- 選項限制正常。
- 自動關閉正常。
- 重新開啟正常。
- 停用限制正常。
- trigger 建立與移除正常。

### 文件完成標準

- README 可以讓新使用者完成安裝。
- Privacy Policy 與實際資料使用一致。
- Terms of Service 已揭露限制與風險。
- Marketplace 文案沒有誇大功能。
- 測試清單可重複執行。

### 上架準備標準

- GitHub repository 已公開。
- Privacy Policy URL 可正常開啟。
- Terms of Service URL 可正常開啟。
- Support URL 可正常開啟。
- Marketplace 截圖完成。
- OAuth consent screen 完成。
- Apps Script 已建立正式 version。
- Marketplace SDK 已填入正確 Apps Script version。

### 風險揭露

- Google Forms 選項更新不是即時同步到每個已開啟頁面的填答者瀏覽器。
- 多人同時填答時，可能短暫超過設定名額。
- Forms add-on 主要作用於 Google Forms 編輯器，不是直接改填答者頁面的 UI。
- 本專案不將資料傳送到外部伺服器。

## 五、正式使用

正式使用流程：

1. 建立正式 Apps Script 專案。
2. 綁定 standard Google Cloud project。
3. 設定 OAuth consent screen。
4. 啟用 Google Workspace Marketplace SDK。
5. 建立 Apps Script version。
6. 在 Marketplace SDK 填入 app configuration。
7. 上傳截圖、logo、說明文字。
8. 填入 Privacy Policy、Terms of Service、Support URL。
9. 提交 OAuth verification。
10. 提交 Marketplace review。
11. 通過審核後公開上架。
12. 使用者從 Marketplace 安裝。
13. 使用者在 Google Forms 中開啟擴充功能。
14. 設定人數上限、選項上限、自動關閉訊息。
15. 儲存並啟用。
16. 表單開始正式收件。

## 版本階段

- `v0.1`：自用 MVP，可以在自己的表單運作。
- `v0.2`：完成選項限制、重新開啟、停用限制。
- `v0.3`：完成文件、隱私權、條款、Marketplace 文案。
- `v0.4`：完成 Marketplace readiness code pass、回測與截圖。
- `v1.0`：正式送審 Marketplace。

## 六、每次計畫結束後的總結模板

每個計畫或階段結束後，都必須使用以下格式總結。

### 計畫名稱

填寫本次執行的計畫或階段名稱。

### 本次完成內容

- 完成了哪些功能。
- 修改了哪些檔案。
- 新增了哪些文件。
- 做了哪些設定。

### 遇到的錯誤與問題

- 錯誤 1：說明錯誤內容、發生位置、原因判斷、解法。
- 錯誤 2：說明錯誤內容、發生位置、原因判斷、解法。
- 尚未解決的問題：列出仍需追蹤的風險。

### 是否需要新增或更新 Skill

判斷標準：

- 如果同一類任務未來會重複執行，應新增 Skill。
- 如果本次出現固定踩坑經驗，應更新 Skill。
- 如果只是一次性操作，不一定需要新增 Skill。
- 如果牽涉 Marketplace、OAuth、Apps Script 上架流程，建議建立或更新 Skill。

輸出格式：

- 判斷結果：需要新增 / 需要更新 / 暫不需要。
- Skill 名稱建議：使用 kebab-case。
- Skill 目的：說明未來何時觸發。
- 應寫入的規則：列出本次學到的 SOP 或踩坑經驗。

### 尚未完成任務

- 未完成任務 1。
- 未完成任務 2。
- 未完成任務 3。

### 目前完成百分比

填寫整體專案完成度，例如：

- 目前完成度：35%
- 判斷依據：已完成 MVP 程式碼與文件草稿，但尚未完成 Google Cloud 設定、OAuth 驗證、Marketplace 送審與正式回測。

### 下一步

- 下一個最重要任務。
- 需要使用者提供的資料。
- 需要建立或更新的外部平台設定。

### 下一個新對話窗 Prompt

每次結束時都要提供下一個對話窗可直接貼上的 prompt，格式如下：

```text
我正在開發 Google Forms 擴充功能 Form Capacity Guard，目標是開源並上架 Google Workspace Marketplace。

目前專案位置：
C:\Users\iL340\Documents\Codex\2026-05-08\outlook\google-form-capacity-addon

請先閱讀 README.md、MARKETPLACE_SUBMISSION.md、Code.gs、Sidebar.html、appsscript.json。

目前進度：
- 已完成 Apps Script MVP。
- 已完成總人數上限、自動關閉、選項名額限制、重新開啟、停用限制的初版。
- 已建立 LICENSE、PRIVACY.md、TERMS.md、CONTRIBUTING.md、SECURITY.md。
- 已建立 Marketplace 送審流程與 Listing 文案草稿。

請接續執行下一階段：
1. 檢查 Apps Script 程式碼是否符合 Google Workspace Marketplace 上架需求。
2. 檢查 OAuth scopes 是否可以再縮小。
3. 制定實際回測表格與測試紀錄格式。
4. 列出 Google Cloud、OAuth consent screen、Marketplace SDK 需要填寫的欄位。
5. 每完成一個階段後，請總結錯誤與問題、判斷是否需要新增或更新 Skill、列出尚未完成任務與目前完成百分比。
```

## 目前專案狀態

目前完成度：62%

已完成：

- Apps Script MVP 初版。
- 側邊欄設定介面初版。
- 總人數上限邏輯。
- 選項名額限制邏輯。
- 自動關閉表單邏輯。
- 重新開啟與停用限制邏輯。
- 開源文件草稿。
- Marketplace 上架流程草稿。
- Marketplace readiness code pass：trigger lock、設定保存正規化、disable/reopen restore、sidebar UX 狀態與錯誤顯示。
- Marketplace assets plan。
- GitHub repository prep。
- mistakes/workflow/Skill 判斷文件。
- FCG-001 到 FCG-011 真實 Google Form 回測腳本與證據清單。
- Marketplace 截圖拍攝順序。

尚未完成：

- 實際貼到 Apps Script 執行測試並記錄結果。
- 實際建立 Google Form 回測並完成 `TEST_PLAN.md`。
- GitHub repository 建立與公開。
- Privacy Policy、Terms、Support URL 的公開網址。
- Custom logo。
- Marketplace screenshots。
- Demo video。
- Google Cloud standard project。
- OAuth consent screen。
- Marketplace SDK 設定。
- Marketplace 截圖與 logo。
- OAuth verification。
- Marketplace review。

## 安裝到自己的 Google 表單

1. 開啟目標 Google 表單。
2. 點右上角「更多」>「指令碼編輯器」。
3. 在 Apps Script 專案中建立或替換以下檔案：
   - `Code.gs`
   - `Sidebar.html`
   - `appsscript.json`
4. 若看不到 `appsscript.json`，到 Apps Script 左側「專案設定」打開「在編輯器中顯示 appsscript.json 資訊清單檔案」。
5. 儲存專案，回到 Google 表單重新整理。
6. 表單上方會出現擴充功能選單。
7. 第一次使用會要求授權，授權後即可設定。

## 主要官方依據

- Google Forms service 可控制是否接受回覆。
- Apps Script installable triggers 可在表單送出後自動執行檢查。
- Apps Script manifest 可設定授權範圍與介面資訊。
- Google Workspace Marketplace 上架需要 OAuth consent、Marketplace SDK、公開隱私權政策與審核流程。

## Release Preparation Notes

- 目前工作介面語言決定使用繁體中文，Marketplace listing、Privacy Policy 與 Terms 建議採繁中為主、英文輔助。
- `appsscript.json` 仍使用 Google Forms 官方圖示，正式送審前必須替換成自訂 logo 的公開 HTTPS URL。
- GitHub repository、Privacy Policy URL、Terms URL、Support URL、support email、logo URL 仍需在公開前補齊。
- FCG-001 到 FCG-005 已完成真實 Google Form 測試並記錄 Passed。
- FCG-006 到 FCG-011 已由測試者確認 Passed，沒有額外截圖。
- Marketplace reviewer instructions 草稿請見 `MARKETPLACE_REVIEWER_INSTRUCTIONS.md`。
- Release preparation 彙整請見 `RELEASE_PREPARATION.md`。
- Custom logo source SVG 已建立於 `assets/logo-source.svg`；PNG exports 與 public logo URL 尚未完成。
- Public repository audit 已建立於 `PUBLIC_REPOSITORY_AUDIT.md`。
