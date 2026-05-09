# Marketplace Listing Draft

## App name

Form Capacity Guard

## Short description / 簡短說明

繁體中文：

限制 Google 表單回覆數，並在選項額滿後自動隱藏或關閉表單。

English:

Limit Google Forms responses and automatically hide full choices.

## Full description / 完整說明

繁體中文：

Form Capacity Guard 協助 Google Forms 管理者控管活動報名、預約時段、課程名額與其他有限名額表單。

核心功能：

- 設定 Google 表單的總回覆人數上限。
- 達到總回覆上限後自動關閉表單。
- 針對下拉選單、單選題與核取方塊設定每個選項的名額上限。
- 選項達到名額後自動從表單中隱藏。
- 當所有已設定選項都額滿時，自動關閉表單。
- 重新開啟表單時恢復原始選項。

適用情境包含活動報名、預約時段、小型庫存預訂、內部登記、課程、諮詢與其他需要控管名額的表單。

English:

Form Capacity Guard helps Google Forms editors manage registrations, reservations, and limited-capacity choices.

Core features:

- Set a total response limit for a Google Form.
- Automatically close the form when the response limit is reached.
- Set per-choice capacity for dropdown, multiple-choice, and checkbox questions.
- Automatically hide choices after they reach capacity.
- Close the form when all configured choices are full.
- Restore original choices when reopening the form.

The add-on is designed for event registration, appointment slots, small inventory reservations, internal signups, classes, consultations, and similar workflows.

## Support text / 支援說明

繁體中文：

如需支援、回報錯誤或提出功能建議，請到公開 GitHub repository 建立 issue。

English:

For support, bug reports, and feature requests, open an issue in the public GitHub repository.

## Privacy summary / 隱私權摘要

繁體中文：

本擴充功能只讀取與更新目前作用中的 Google Form。設定資料會儲存在表單所屬 Apps Script 專案的 document properties 中，不會將表單資料傳送到外部伺服器。

English:

The add-on reads and updates only the active Google Form. It stores configuration in the form's Apps Script document properties and does not send form data to external servers.

## Screenshot plan

1. Sidebar home screen showing response count and form status.
2. Total response limit settings.
3. Choice limit settings for a dropdown or multiple-choice question.
4. Closed form message after capacity is reached.

See `MARKETPLACE_ASSETS.md` for the full screenshot checklist, logo requirements, and demo video script.

## Known limitations to mention when relevant / 已知限制

- Capacity checks run after form submission, so near-simultaneous submissions can briefly exceed a limit.
- Choice hiding affects the form after enforcement; respondents who already loaded the form may need to refresh.
- The add-on stores original choice values for restore support, but advanced choice behaviors such as section navigation should be tested before production use.

## Reviewer notes

- Use `MARKETPLACE_REVIEWER_INSTRUCTIONS.md` for the Marketplace reviewer instruction draft.
- Real test run `FCG-20260508-01` passed FCG-001 through FCG-005 with screenshots.
- FCG-006 through FCG-011 were later completed by tester confirmation and can be described as passed, with the evidence note that no additional screenshots were provided.
