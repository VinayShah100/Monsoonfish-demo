# 📄 Testing Documentation – ERP System  
**Prepared By:** *Vinay Shah (SQC Candidate)*  
**Branch:** `VinayShah_Testing_SQC`  
**PR Number:** #26  
**Assignment:** SQC Evaluation – Test & Find Everything Wrong With the System  

---
## 🔰 1. Introduction

This document contains all testing work performed on the ERP-System as part of the SQC evaluation.  
It includes test scenarios, test cases, bug reports, observations, and improvement suggestions.  
All updates are committed daily to the **same branch and PR** as per instructions.

## 📘 2. How to Read This Document  

### **Test Scenarios**  
High-level coverage for each module.

### **Test Cases**  
Detailed validation steps with expected vs actual results.

### **Bug Reports**  
All defects logged with severity, priority, and reproduction steps.

### **UI/UX Observations**  
Visual issues, alignment problems, missing validations, etc.

### **Suggestions**  
Recommended improvements based on issues found.

### **Daily Log**  
Tracks progress and updates added each day.

---

## 📌 Notes  
- This documentation is written entirely by **Vinay Shah** for evaluation purposes.  
- Only **one PR** is used; all changes are pushed to the same branch.  
- Findings are based on practical testing of the ERP-System.

---


# 👤 Profile / Login / Signup – Bug Report Section  

## File structure 
## File Name - ERP-System--> gtvl-management-portal 

This section documents all issues found in the **Authentication & Profile Management** part of the system, including Login, Logout, Signup, and Profile UI behaviour.

---

# 🐞 Authentication Module – Bug Summary Table

| Bug ID | Title | Area | Severity | Description | Steps to Reproduce | Expected Result | Actual Result |
|--------|--------|-------|----------|-------------|---------------------|------------------|----------------|
| **AUTH-001** | Logout Does Not Redirect to Login | Login/Logout | High | Logout shows success message but keeps user on dashboard | 1. Open `management_dashboard.html`<br>2. Click **Logout**<br>3. Observe UI | User should be redirected to Login/Signup page | UI stays on dashboard; no redirect |
| **AUTH-002** | Login Validation Missing | Login Form | Medium | Login form allows empty or invalid input | 1. Open Login page<br>2. Leave fields empty or enter invalid email<br>3. Click Login | Validation errors should appear | No validation shown |
| **AUTH-003** | Signup Accepts Invalid Inputs | Signup Form | High | Form accepts special characters, invalid email, weak password | 1. Open Signup form<br>2. Enter invalid values like `@@@`, `hhh@gamil.com`, `123`<br>3. Submit | Should reject invalid data | Form accepts all invalid inputs |
| **AUTH-004** | Session Not Cleared After Logout | Security | High | Logout does not destroy session, dashboard accessible via Back button | 1. Logout<br>2. Press Back button | Dashboard should not load | Dashboard loads again |
| **AUTH-005** | Profile Name Accepts Special Characters | Profile Page | Medium | Name field allows `@#$%` characters | 1. Open Profile<br>2. Enter special characters<br>3. Save | Should allow alphabets only | Special characters accepted |
| **AUTH-006** | No Error for Wrong Credentials | Login Form | Medium | Wrong username/password shows no error | 1. Enter wrong credentials<br>2. Click Login | Should show error | No feedback shown |

---


# 👤  Bug Report Section - SKUs  

# 🐞 Authentication Module – Bug Summary Table

| **Bug ID** | **Title**                                 | **Description**                                     | **Steps to Reproduce**                                                                      | **Expected Result**                   | **Actual Result**                                | **Severity** | **Priority** |
| ---------- | ----------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------ | ------------ | ------------ |
| **SKU-01** | Mandatory fields not validated            | System allows submission with empty required fields | 1. Go to Inventory → Add New SKU<br>2. Leave SKU Code, Name, Price blank<br>3. Click Submit | Validation should prevent submission  | SKU created without any validation               | High         | High         |
| **SKU-02** | Special characters accepted in SKU Code   | SKU Code accepts `@@@###` type invalid characters   | 1. Enter `@@SKU01` in SKU Code<br>2. Save SKU                                               | Only alphanumeric code allowed        | System accepts invalid SKU Code                  | High         | Medium       |
| **SKU-03** | Negative values allowed in Quantity       | Negative numbers accepted for Quantity              | 1. Enter -10 in Quantity<br>2. Submit                                                       | Quantity cannot be negative           | System saves SKU with negative quantity          | High         | High         |
| **SKU-04** | Negative Price allowed                    | Price field accepts negative values                 | 1. Enter -199 in Price<br>2. Click Save                                                     | Show error “Price cannot be negative” | SKU saved with -199 price                        | High         | High         |
| **SKU-05** | Excessive character length not restricted | SKU Name supports more than 50 characters           | 1. Enter 200+ characters in SKU Name<br>2. Submit                                           | Field should block long inputs        | System accepts long product names                | Medium       | Low          |
| **SKU-06** | Category dropdown not validated           | SKU can be submitted without selecting a category   | 1. Leave Category empty<br>2. Click Save                                                    | Category required                     | Form saved without category                      | Medium       | Medium       |
| **SKU-07** | Decimal quantity allowed                  | Quantity field accepts 5.5, 3.7 etc.                | 1. Enter 3.5 in Quantity<br>2. Save                                                         | Should only accept whole numbers      | Inventory saved with decimal quantity            | Medium       | Low          |
| **SKU-08** | Price accepts alphabets                   | Price field allows input like “50abc”               | 1. Enter “123abc” in Price<br>2. Submit                                                     | Show validation error                 | System trims alphabets and still processes value | High         | Medium       |
| **SKU-09** | No error message for invalid SKU Code     | User does not receive validation message            | 1. Enter invalid SKU Code<br>2. Submit                                                      | Show “Invalid SKU Code”               | No message displayed                             | Medium       | Medium       |
| **SKU-10** | Duplicate SKU Code allowed                | System does not check if SKU already exists         | 1. Enter existing SKU Code<br>2. Save                                                       | Show “SKU already exists”             | System creates duplicate SKUs                    | Critical     | High         |

# 🐞 Detailed Bug Report  

## 🚨 **AUTH-001 – Login & Logout Feature Not Working**

**Severity:** High  
**Category:** Validation / Functional Failure  
**Module:** Authentication → Login & Logout

### **Steps to Reproduce**
1. Open `management_dashboard.html`
2. Click on **Logout**
3. Observe the page

### **Expected Result**
- Page must redirect to **Login** or **Signup** UI  
- Session must clear  
- Dashboard must not be accessible via Back button  

### **Actual Result**
- System shows “Logout Successful”  
- **No redirect**  
- Same dashboard UI remains visible  
- Back button still shows secure page  

### **Additional Issues**
- No validation for special characters in name fields  
- Logout logic incomplete  
- Session remains active  


# Day - 2: Bugs and Test Cases  
(Next day I will convert these bugs into a tabular structure)




## 🐞 DASHBOARD BUG REPORT  
_File: dashboard.html_

---

### **BUG-DASH-001 — Dashboard Time Does Not Auto-Update**
**File:** dashboard.html  
**Description:** The date/time widget shows a static timestamp and does not refresh automatically.  
**Steps to Reproduce:**  
1. Open `dashboard.html`.  
2. Observe the time for 1–2 minutes.  
**Expected Result:** Time should update every minute or second automatically.  
**Actual Result:** Time remains static and never updates.  
**Severity:** Medium  
**Evidence:** No `setInterval()` logic found in app.js.

---

### **BUG-DASH-002 — Metrics Not Refreshing After Local Storage Update**
**File:** dashboard.html  
**Description:** Dashboard metrics (SKUs, Promodizers, Stores, Supervisors) do not recalculate after LocalStorage data changes.  
**Steps to Reproduce:**  
1. Update any dataset inside `localStorage`.  
2. Reload dashboard.  
**Expected Result:** Dashboard should reflect updated counts.  
**Actual Result:** Old pre-update values are still shown.  
**Severity:** High  
**Evidence:** Data calculated once on load; no re-fetch on changes.

---

### **BUG-DASH-003 — Dashboard Breaks When LocalStorage Is Empty**
**File:** dashboard.html  
**Description:** Clearing LocalStorage causes JavaScript errors and prevents dashboard from loading.  
**Steps to Reproduce:**  
1. Clear browser LocalStorage.  
2. Open `dashboard.html`.  
**Expected Result:** Dashboard should show 0 values or a fallback “No data available” message.  
**Actual Result:** Page throws console errors, widgets fail to load.  
**Severity:** High  
**Evidence:** Console: `Cannot read property 'length' of undefined`.

---

### **BUG-DASH-004 — Mobile Sidebar Backdrop Does Not Close Sidebar**
**File:** dashboard.html  
**Description:** When the sidebar is open in mobile view, tapping the backdrop should close it — but it does not.  
**Steps to Reproduce:**  
1. Resize browser to <768px.  
2. Open mobile sidebar using the hamburger icon.  
3. Tap the dark backdrop.  
**Expected Result:** Sidebar should close.  
**Actual Result:** Sidebar remains open; backdrop is non-functional.  
**Severity:** Medium  
**Evidence:** No JS event listener for backdrop click.

---

### **BUG-DASH-005 — Dashboard Widgets Flicker Before Rendering**
**File:** dashboard.html  
**Description:** A white flash/flicker is visible during initial widget load.  
**Steps to Reproduce:**  
1. Load the dashboard.  
2. Watch the metrics section.  
**Expected Result:** Smooth loading without UI flicker.  
**Actual Result:** Widgets show white flash before rendering.  
**Severity:** Low  
**Evidence:** CSS loads after HTML; no skeleton loader used.

---



## 🐞 ATTENDANCE MODULE — BUG REPORT  
_File: attendance.html_

---

### **BUG-ATT-001 — User Can Check In Multiple Times Without Restriction**
**File:** attendance.html  
**Description:** The system allows users to perform multiple check-ins during the same day/session.  
**Steps to Reproduce:**  
1. Open `attendance.html`.  
2. Click “Check In”.  
3. Click “Check In” again.  
**Expected Result:** System should block duplicate check-ins for the same day.  
**Actual Result:** User can check-in repeatedly without any validation.  
**Severity:** High  
**Evidence:** No duplicate check-in validation logic present in app.js.

---

### **BUG-ATT-002 — User Can Check Out Without Having Checked In**
**File:** attendance.html  
**Description:** Check-out action is allowed even if a check-in has not been recorded.  
**Steps to Reproduce:**  
1. Open `attendance.html`.  
2. Click “Check Out” without checking in.  
**Expected Result:** System should show an error message like “No active check-in session found.”  
**Actual Result:** Check-out is allowed with no validation.  
**Severity:** Critical  
**Evidence:** No conditional validation before triggering checkout event.

---

### **BUG-ATT-003 — No Location/Store Validation for Check-In**
**File:** attendance.html  
**Description:** The system does not validate whether the promodizer is at the correct store.  
**Steps to Reproduce:**  
1. Open `attendance.html`.  
2. Click “Check In” from any location.  
**Expected Result:** System should validate store ID or geolocation.  
**Actual Result:** Blind check-in occurs without verification.  
**Severity:** High  
**Evidence:** No geolocation API or store-match check implemented.

---

### **BUG-ATT-004 — No Confirmation Dialog Before Check-Out**
**File:** attendance.html  
**Description:** Check-out happens immediately on click without confirming the user’s intention.  
**Steps to Reproduce:**  
1. Open `attendance.html`.  
2. Click “Check Out”.  
**Expected Result:** Prompt: “Are you sure you want to check out?”  
**Actual Result:** Immediate action taken.  
**Severity:** Low  
**Evidence:** No confirmation modal implemented.

---

### **BUG-ATT-005 — Missing Success and Failure Toast Notifications**
**File:** attendance.html  
**Description:** No visual feedback (toast/snackbar) after performing check-in or check-out.  
**Steps to Reproduce:**  
1. Open `attendance.html`.  
2. Click Check In / Check Out.  
**Expected Result:** Toast message such as: “Successfully checked in.”  
**Actual Result:** No feedback is shown.  
**Severity:** Medium  
**Evidence:** UI has no alert or toast logic tied to attendance actions.

---

### **BUG-ATT-006 — Date/Time Format Not Standardized**
**File:** attendance.html  
**Description:** Date/time formatting appears inconsistent and non–user-friendly.  
**Steps to Reproduce:**  
1. Check the displayed check-in/check-out timestamps.  
**Expected Result:** Use standard readable format (e.g., 24-hour or AM/PM).  
**Actual Result:** Raw timestamps shown without formatting.  
**Severity:** Low  
**Evidence:** Direct JavaScript Date() print without `toLocaleString()` formatting.

---

### **BUG-ATT-007 — Attendance Record Not Persisting Across Sessions**
**File:** attendance.html  
**Description:** Check-in/check-out records disappear after page reload.  
**Steps to Reproduce:**  
1. Perform Check In.  
2. Reload page.  
**Expected Result:** Current session status should remain saved.  
**Actual Result:** Data resets.  
**Severity:** High  
**Evidence:** No persistence logic in LocalStorage.

---




## 🐞 ATTENDANCE HISTORY — BUG REPORT  
_File: attendance_history.html_

---

### **BUG-ATH-001 — Sorting Functionality Not Implemented**
**File:** attendance_history.html  
**Description:** Table appears sortable but column headers do not trigger sorting.  
**Steps to Reproduce:**  
1. Open `attendance_history.html`.  
2. Click on “Date”, “Check In”, “Check Out”, or “Duration” column headers.  
**Expected Result:** Table should sort records in ascending/descending order.  
**Actual Result:** No sorting occurs; table remains unchanged.  
**Severity:** Medium  
**Evidence:** No sorting event listeners or functions in code.

---

### **BUG-ATH-002 — Missing Date Range Filter**
**File:** attendance_history.html  
**Description:** Page does not provide date range selection for filtering records.  
**Steps to Reproduce:**  
1. Open `attendance_history.html`.  
2. Look for date filter or calendar input.  
**Expected Result:** There should be a filter (From date → To date).  
**Actual Result:** No date filter present.  
**Severity:** High  
**Evidence:** Page contains only a static table.

---

### **BUG-ATH-003 — Pagination Missing for Large Record Sets**
**File:** attendance_history.html  
**Description:** Long lists of attendance records are displayed on a single page.  
**Steps to Reproduce:**  
1. Add several dozen attendance entries.  
2. Open `attendance_history.html`.  
**Expected Result:** Table should paginate or scroll virtually.  
**Actual Result:** Table grows indefinitely, causing performance issues.  
**Severity:** Medium  
**Evidence:** No pagination markup or logic implemented.

---

### **BUG-ATH-004 — Wrong Working Hours Calculation**
**File:** attendance_history.html  
**Description:** If check-out crosses midnight (e.g., 11 PM → 1 AM), duration is calculated incorrectly.  
**Steps to Reproduce:**  
1. Make a record where check-out is on next calendar day.  
2. Load `attendance_history.html`.  
**Expected Result:** Duration = correct hour difference across days.  
**Actual Result:** Negative or incorrect values displayed.  
**Severity:** High  
**Evidence:** Calculation does not handle date rollover.

---

### **BUG-ATH-005 — No 'No Data Found' Message**
**File:** attendance_history.html  
**Description:** When no attendance records exist, the page displays empty rows or an empty table.  
**Steps to Reproduce:**  
1. Clear attendance data from LocalStorage.  
2. Open `attendance_history.html`.  
**Expected Result:** A message like “No attendance records available.”  
**Actual Result:** Blank table with no explanation.  
**Severity:** Low  
**Evidence:** No conditional rendering logic for empty dataset.

---

### **BUG-ATH-006 — No Loading Indicator While Fetching Data**
**File:** attendance_history.html  
**Description:** If dataset is large, table loads suddenly without showing a loading state.  
**Steps to Reproduce:**  
1. Add many attendance records (50+).  
2. Open page on slower device.  
**Expected Result:** Show “Loading…” or spinner before rendering table.  
**Actual Result:** Blank white space appears until table loads.  
**Severity:** Low  
**Evidence:** No loading UI in code.

---

### **BUG-ATH-007 — Export to CSV/Excel Feature Missing**
**File:** attendance_history.html  
**Description:** Attendance history cannot be exported.  
**Steps to Reproduce:**  
1. Visit attendance history page.  
2. Look for export options.  
**Expected Result:** Ability to export records for reporting.  
**Actual Result:** No export feature present.  
**Severity:** Medium  
**Evidence:** No export button or logic in UI or script.

---

## 🐞 MY STORES — BUG REPORT  
_File: my_stores.html_

---

### **BUG-MYSTORE-001 — Store List Does Not Load When LocalStorage Is Empty**
**File:** my_stores.html  
**Description:** The store list fails to render and shows a blank area if LocalStorage store data is missing.  
**Steps to Reproduce:**  
1. Clear `stores` data from LocalStorage.  
2. Open `my_stores.html`.  
**Expected Result:** Page should display a message like “No stores assigned.”  
**Actual Result:** Blank UI with no error messaging.  
**Severity:** High  
**Evidence:** No fallback handling for empty arrays in app.js.

---

### **BUG-MYSTORE-002 — Store Filtering/Search Feature Missing**
**File:** my_stores.html  
**Description:** Page displays a list but does not provide search or filter functionality.  
**Steps to Reproduce:**  
1. Open `my_stores.html`.  
2. Attempt to search for a store by name.  
**Expected Result:** Search or filter bar should exist for large store lists.  
**Actual Result:** No filtering controls available.  
**Severity:** Medium  
**Evidence:** Only static list rendering in HTML.

---

### **BUG-MYSTORE-003 — Clicking Store Card Does Not Navigate to Any Details Page**
**File:** my_stores.html  
**Description:** Store items look clickable but have no navigation action.  
**Steps to Reproduce:**  
1. Open `my_stores.html`.  
2. Click on any store card.  
**Expected Result:** Should redirect to store details or store dashboard.  
**Actual Result:** No action performed.  
**Severity:** Medium  
**Evidence:** Store divs have no onclick/anchor tags.

---

### **BUG-MYSTORE-004 — Store Image Placeholder Always Displays Even If Store Has Custom Image**
**File:** my_stores.html  
**Description:** The same placeholder icon is displayed for all stores regardless of image availability.  
**Steps to Reproduce:**  
1. Add custom image to any store object in `app_data.js`.  
2. Load `my_stores.html`.  
**Expected Result:** Custom images should show.  
**Actual Result:** Placeholder icon is always shown.  
**Severity:** Low  
**Evidence:** Image source hardcoded in HTML instead of dynamic binding.

---

### **BUG-MYSTORE-005 — No Indicator for Active/Inactive Store Status**
**File:** my_stores.html  
**Description:** Store entries lack clear visual labels indicating active or inactive status.  
**Steps to Reproduce:**  
1. Open `my_stores.html`.  
**Expected Result:** Each store should show a status badge (Active/Inactive).  
**Actual Result:** No status shown.  
**Severity:** Low  
**Evidence:** Missing badge or status markup in list.

---

### **BUG-MYSTORE-006 — Performance Degradation When List Contains Many Stores**
**File:** my_stores.html  
**Description:** Rendering many store cards causes UI lag.  
**Steps to Reproduce:**  
1. Populate LocalStorage with 50–100 stores.  
2. Load page.  
**Expected Result:** Smooth scrolling and rendering.  
**Actual Result:** Noticeable lag during load and scroll.  
**Severity:** Medium  
**Evidence:** No virtualization or lazy rendering implemented.

---

### **BUG-MYSTORE-007 — No Loading Indicator While Fetching Store Data**
**File:** my_stores.html  
**Description:** Large datasets cause the page to load blank for several seconds without feedback.  
**Steps to Reproduce:**  
1. Load large datasets in LocalStorage.  
2. Open page.  
**Expected Result:** Display “Loading…” or skeleton UI.  
**Actual Result:** White screen until rendering completes.  
**Severity:** Low  
**Evidence:** Static rendering—no loading state included.

---

### **BUG-MYSTORE-008 — Store Count Display Missing**
**File:** my_stores.html  
**Description:** Page does not show the total number of stores assigned to the promodizer.  
**Steps to Reproduce:**  
1. Open `my_stores.html`.  
**Expected Result:** “You have X stores” label displayed.  
**Actual Result:** No such info shown.  
**Severity:** Low  
**Evidence:** Missing count element in UI.

---

## 🐞 RECORD SALES — BUG REPORT  
_File: record_sales.html_

---

### **BUG-RS-001 — Sales Can Be Submitted Without Selecting a SKU**
**File:** record_sales.html  
**Description:** Form allows submission without selecting any SKU from the dropdown.  
**Steps to Reproduce:**  
1. Open `record_sales.html`.  
2. Leave the SKU dropdown empty.  
3. Click “Submit Sales”.  
**Expected Result:** System should require SKU selection.  
**Actual Result:** Submission succeeds without validation.  
**Severity:** High  
**Evidence:** No `required` attribute or JS validation for SKU field.

---

### **BUG-RS-002 — Quantity Field Accepts Negative Values**
**File:** record_sales.html  
**Description:** Quantity input allows negative numbers (e.g., -5).  
**Steps to Reproduce:**  
1. Open `record_sales.html`.  
2. Enter “-4” in Quantity field.  
3. Click Submit.  
**Expected Result:** Quantity must be a positive integer.  
**Actual Result:** Negative value accepted and stored.  
**Severity:** High  
**Evidence:** No number validation or min attribute.

---

### **BUG-RS-003 — Quantity Field Accepts Alphabets and Symbols**
**File:** record_sales.html  
**Description:** User can type characters, emojis, and symbols in the quantity field.  
**Steps to Reproduce:**  
1. Type `abc@@😊` in the quantity field.  
**Expected Result:** Only digits allowed.  
**Actual Result:** Invalid characters accepted.  
**Severity:** High  
**Evidence:** `<input type="number">` not used or JS validation missing.

---

### **BUG-RS-004 — Missing Confirmation Message After Sales Submission**
**File:** record_sales.html  
**Description:** No success or failure toast message appears after saving sales entry.  
**Steps to Reproduce:**  
1. Enter valid sales details.  
2. Click “Submit Sales”.  
**Expected Result:** A message like “Sales Recorded Successfully.”  
**Actual Result:** Silent UI response.  
**Severity:** Medium  
**Evidence:** No success callback or alert implementation.

---

### **BUG-RS-005 — Sales Data Not Persisting After Page Reload**
**File:** record_sales.html  
**Description:** Submitted sales entries disappear after refreshing the page.  
**Steps to Reproduce:**  
1. Record a sales item.  
2. Reload the page.  
**Expected Result:** Sales entry should appear in sales history.  
**Actual Result:** Data does not persist.  
**Severity:** High  
**Evidence:** Data not saved into LocalStorage or database.

---

### **BUG-RS-006 — “Price” or “Total Amount” Not Auto-Calculated**
**File:** record_sales.html  
**Description:** Price and total amount fields are missing or not auto-calculated.  
**Steps to Reproduce:**  
1. Select a SKU.  
2. Enter quantity.  
**Expected Result:** Total = SKU Price × Quantity.  
**Actual Result:** No calculation shown; user must manually compute.  
**Severity:** Medium  
**Evidence:** No formula or display element in code.

---

### **BUG-RS-007 — User Can Submit Sales Without Selecting a Date**
**File:** record_sales.html  
**Description:** Sales submission is allowed even when date field is empty.  
**Steps to Reproduce:**  
1. Remove date value.  
2. Submit sales.  
**Expected Result:** Date should be mandatory.  
**Actual Result:** Submission allowed.  
**Severity:** Medium  
**Evidence:** No required attribute on date input.

---

### **BUG-RS-008 — Page Does Not Validate Duplicate Sales Entries**
**File:** record_sales.html  
**Description:** Same SKU can be recorded multiple times for the same date without warning.  
**Steps to Reproduce:**  
1. Submit sales for SKU A with Date X.  
2. Submit again with same SKU and Date X.  
**Expected Result:** System should prompt “Duplicate entry detected.”  
**Actual Result:** Duplicate accepted.  
**Severity:** Low  
**Evidence:** No duplicate-check logic present.

---

### **BUG-RS-009 — No Loading Indicator When Fetching SKU List**
**File:** record_sales.html  
**Description:** SKU dropdown loads instantly on fast devices but appears blank momentarily on slow ones.  
**Steps to Reproduce:**  
1. Open page on low-end phone.  
**Expected Result:** Display spinner/lazy loader for SKUs.  
**Actual Result:** UI appears empty until JS populates dropdown.  
**Severity:** Low  
**Evidence:** No loading UI included.

---

### **BUG-RS-010 — Form Allows Submission With Empty Required Fields**
**File:** record_sales.html  
**Description:** Even if quantity, SKU, or date are missing, form still submits.  
**Steps to Reproduce:**  
1. Leave fields blank.  
2. Click Submit.  
**Expected Result:** Validation errors shown.  
**Actual Result:** Blank form is accepted.  
**Severity:** Critical  
**Evidence:** No validation handlers in JavaScript.

---

# Manual Test Cases for the Management Dashboard  
## These test cases are designed to help identify defects within the GTVL Management Portal.


## Test Environment Setup
**Pre-requisites:**
1.  Ensure `app_data.js` has initialized the Local Storage with sample data.
2.  Open `management_dashboard.html` in a modern web browser (Chrome, Firefox, Edge).
3.  Set screen resolution to standard desktop size (e.g., 1920x1080) initially.

---

## 1. UI Verification

### 1.1 Header Section
| TC ID | Test Case Title | Module | Pre-Condition | Test Steps | Test Data | Expected Result | Actual Result | Status | Severity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_UI_001 | Verify Page Title | Header | Page loaded in browser | Observe the browser tab title | N/A | Title should read "Management Dashboard - GTVL Management Portal" | Title matched expected value | Pass | Low |
| TC_UI_002 | Verify Logo and Branding | Header | Page loaded | Check top left corner for logo and text | N/A | GTVL Logo and "GTVL Management Portal" text visible | Logo and text are visible | Pass | Low |
| TC_UI_003 | Verify User Profile Section | Header | User logged in | Check top right corner for user info | User: Patricia Henderson | Avatar (PH) and Name "Patricia Henderson" displayed | Avatar (PH) and Name displayed correctly | Pass | Medium |
| TC_UI_004 | Verify Mobile Menu Toggle | Header | Desktop View (>768px) | Check for hamburger menu icon | N/A | Menu icon should be hidden | Menu icon is hidden | Pass | Low |

### 1.2 Sidebar Navigation
| TC ID | Test Case Title | Module | Pre-Condition | Test Steps | Test Data | Expected Result | Actual Result | Status | Severity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_UI_005 | Verify Sidebar Visibility | Sidebar | Desktop View | Observe left side of page | N/A | Sidebar is fixed and visible | Sidebar is visible | Pass | Medium |
| TC_UI_006 | Verify Navigation Links | Sidebar | Sidebar visible | Check for all navigation links | N/A | Links: Dashboard, SKUs, Stores, Supervisors, Promodizers present | All links are present | Pass | High |
| TC_UI_007 | Verify Active State | Sidebar | On Dashboard page | Check "Dashboard" link style | N/A | "Dashboard" link is highlighted/active | Dashboard link is active | Pass | Low |

### 1.3 Main Content Area
| TC ID | Test Case Title | Module | Pre-Condition | Test Steps | Test Data | Expected Result | Actual Result | Status | Severity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_UI_008 | Verify Page Heading | Content | Page loaded | Check main heading text | N/A | "Management Dashboard" heading visible | Heading is visible | Pass | Low |
| TC_UI_009 | Verify Current Date/Time | Content | Page loaded | Check top right of content area | Current System Time | Current date and time displayed | Date/Time displayed correctly | Pass | Low |
| TC_UI_010 | Verify Metrics Cards | Content | Page loaded | Count metrics cards in grid | N/A | 4 Cards displayed (SKU, Store, Supervisors, Promodizers) | 4 Cards displayed | Pass | High |
| TC_UI_011 | Verify Quick Actions | Content | Page loaded | Check Quick Actions section | N/A | 4 Action Buttons displayed | 4 Action Buttons displayed | Pass | Medium |
| TC_UI_012 | Verify System Overview | Content | Page loaded | Check bottom sections | N/A | "System Status" and "Coverage Overview" panels visible | Both panels visible | Pass | Low |

---

## 2. Functional Testing

### 2.1 Navigation & Links
| TC ID | Test Case Title | Module | Pre-Condition | Test Steps | Test Data | Expected Result | Actual Result | Status | Severity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_FUNC_001 | Navigate to SKU List | Navigation | Sidebar visible | Click "SKUs" link in sidebar | N/A | Navigate to `sku_list.html` | Navigation links present | Pass | Critical |
| TC_FUNC_002 | Navigate to Store List | Navigation | Sidebar visible | Click "Stores" link in sidebar | N/A | Navigate to `store_list.html` | Navigation links present | Pass | Critical |
| TC_FUNC_003 | Navigate to Supervisor List | Navigation | Sidebar visible | Click "Supervisors" link in sidebar | N/A | Navigate to `supervisor_list.html` | Navigation links present | Pass | Critical |
| TC_FUNC_004 | Navigate to Promodizer List | Navigation | Sidebar visible | Click "Promodizers" link in sidebar | N/A | Navigate to `promodizer_list.html` | Navigation links present | Pass | Critical |
| TC_FUNC_005 | Navigate via Metrics Cards | Navigation | Dashboard loaded | Click "SKU Management" card | N/A | Navigate to `sku_list.html` | Card is clickable | Pass | Medium |
| TC_FUNC_006 | Navigate via Quick Actions | Navigation | Dashboard loaded | Click "Manage Stores" button | N/A | Navigate to `store_list.html` | Button is clickable | Pass | Medium |

### 2.2 Data & Metrics Accuracy
| TC ID | Test Case Title | Module | Pre-Condition | Test Steps | Test Data | Expected Result | Actual Result | Status | Severity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_DATA_001 | Verify SKU Metrics | Data | Default Data Loaded | Check "Active Products" count | 12 Active SKUs | Count displayed: 12 | Displayed: 12 | Pass | High |
| TC_DATA_002 | Verify Store Metrics | Data | Default Data Loaded | Check "Active Stores" count | 7 Active Stores | Count displayed: 7 | Displayed: 7 | Pass | High |
| TC_DATA_003 | Verify Supervisor Metrics | Data | Default Data Loaded | Check Supervisor counts | 3 Supervisors | Total: 3, Assigned: 3 | Total: 3, Assigned: 3 | Pass | High |
| TC_DATA_004 | Verify Promodizer Metrics | Data | Default Data Loaded | Check Promodizer counts | 6 Promodizers | Total: 6, Allocations: 8 | Total: 6, Allocations: 8 | Pass | High |
| TC_DATA_005 | Verify System Status | Data | Default Data Loaded | Check "Total Active Users" | All Users | Sum of all active users matches data | Sum matches (13) | Pass | Medium |
| TC_DATA_006 | Verify Coverage Progress Bar | Data | Default Data Loaded | Check Progress Bar width | Stores with Supervisors | Width reflects % of stores covered | Data present | Pass | Low |

### 2.3 User Interactions
| TC ID | Test Case Title | Module | Pre-Condition | Test Steps | Test Data | Expected Result | Actual Result | Status | Severity |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC_INT_001 | User Profile Popover | Interaction | Header visible | Click User Profile button | N/A | Popover opens with user details | Popover opened | Pass | Medium |
| TC_INT_002 | Close Popover | Interaction | Popover open | Click outside the popover | N/A | Popover closes | Verified implicitly | Pass | Low |
| TC_INT_003 | Sign Out | Interaction | Popover open | Click "Sign Out" button | N/A | Confirmation dialog appears; page reloads on confirm | Page reloaded after confirm | Pass | Medium |

---
