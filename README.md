## 🐞 BUG-008: Sign Out Fails & Auto-Logs Another User
**Severity:** Critical  
**Module:** All Portals (Management / Supervisor / Promodizer / Analytics)  
**Type:** Functional – Authentication / Session Management  

### Summary  
Sign Out does not clear sessions.  
In some portals, after clicking Sign Out another user auto-logs in.

### Steps to Reproduce  
1. Log in to any portal.  
2. Click **Sign Out**.  
3. Open another portal and repeat.

### Expected Result  
- Full session termination.  
- Redirect to login screen.  
- No auto-login.

### Actual Result  
- User remains logged in.  
- Another account auto-appears in other portals.  
- Session not cleared.



## 🐞 BUG-001: Action Buttons Not Working on Desktop (View / Edit / Delete)
**Severity:** Critical  
**Module:** Store Management → store_list.html  
**Type:** Functional | UI Interaction  

### Summary  
Action buttons (View, Edit, Delete) do not respond on desktop browsers, while functioning correctly on mobile.

### Steps to Reproduce  
1. Open `store_list.html` on a Windows desktop browser.  
2. Click **View**, **Edit**, or **Delete** icons.  
3. Observe no action triggered.  
4. Switch to mobile view and repeat.  

### Expected Result  
Buttons should work consistently across desktop and mobile.

### Actual Result  
- **Desktop:** No response.  
- **Mobile:** Working normally.

## 🐞 BUG-002: Export Button Not Working in Store Directory
**Severity:** High  
**Module:** Stores → store_list.html  
**Type:** Functional – Missing Implementation  

### Summary  
Clicking the Export button does not trigger any download or UI feedback.

### Steps to Reproduce  
1. Log in to the portal.  
2. Navigate to **Management → Stores**.  
3. Click the **Export** button.  

### Expected Result  
- CSV/Excel export should download.  
- Failure should show a toast/error.

### Actual Result  
- No download.  
- No error/toast.  
- No network activity.



## 🐞 BUG-003: Supervisor Unable to Add Promodizer
**Severity:** Critical  
**Module:** Team Management → add_promodizer.html  
**Type:** Functional – RBAC  

### Summary  
Supervisors are blocked from accessing the Add Promodizer form due to case-sensitive role validation.

### Steps to Reproduce  
1. Log in as Supervisor.  
2. Go to **Supervisor Portal → My Team**.  
3. Click **Add New Promodizer**.  

### Expected Result  
Supervisor should access the form.

### Actual Result  
- Alert shows access denied.  
- Redirects back to list.  

### Root Cause  
Role comparison uses strict case-sensitive check (`'supervisor'` vs `'Supervisor'`).



## 🐞 BUG-004: Store Performance Table Not Visible on Desktop
**Severity:** High  
**Module:** Sales Analytics → Store Performance Dashboard  
**Type:** Functional + UI Layout  

### Summary  
Store Performance table is hidden on desktop. View toggle buttons and chart view also fail to respond.

### Steps to Reproduce  
1. Open Sales Analytics Dashboard on desktop.  
2. Go to **Store Performance Analysis**.  
3. Observe missing table.  
4. Click **Table View** or **Chart View**.  

### Expected Result  
- Table should be visible.  
- Toggle buttons should work.

### Actual Result  
- Table area is blank on desktop.  
- Chart does not render.  
- Toggle buttons unresponsive.




## 🐞 BUG-005: Phone Number Field Masking / Backspace Issue
**Severity:** Medium  
**Module:** Stores → Create / Edit Store  
**Type:** Functional – Input Masking  

### Summary  
Backspace does not remove characters correctly once input mask formatting is applied.

### Steps to Reproduce  
1. Open Store Create/Edit form.  
2. Enter digits until mask appears.  
3. Press Backspace.  

### Expected Result  
- Characters delete one-by-one.  
- Mask updates smoothly.

### Actual Result  
- Characters do not delete individually.  
- Cursor jumps unpredictably.





## 🐞 BUG-006: Assigned Stores Arrow Click Fails on Desktop
**Severity:** High  
**Module:** Promodizer List → Assigned Stores Popup  
**Type:** Functional – Cross-Platform  

### Summary  
Arrow icon inside the Assigned Stores popup works on mobile but not on desktop.

### Steps to Reproduce  
1. Open the portal on Windows desktop.  
2. Navigate to **Promodizer List**.  
3. Open **Assigned Stores** popup.  
4. Click arrow icon.

### Expected Result  
Navigation to Promodizer details page should occur.

### Actual Result  
- **Desktop:** No response.  
- **Mobile:** Navigation works.




## 🐞 BUG-007: Duplicate Email Allowed During Supervisor Creation
**Severity:** High  
**Module:** Supervisors → supervisor_create.html  
**Type:** Functional – Validation  

### Summary  
System allows multiple Supervisor accounts using the same email.

### Steps to Reproduce  
1. Open Create Supervisor form.  
2. Enter an existing email.  
3. Submit twice using same email.

### Expected Result  
Duplicate email should be blocked with validation feedback.

### Actual Result  
- Duplicate accounts created.  
- No validation error.
