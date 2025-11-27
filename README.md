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

