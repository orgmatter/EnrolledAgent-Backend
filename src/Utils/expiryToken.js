// Get from the session and validate for each reload or any event.
function validateSession() {
  let seassionVal = localStorage.getItem(key);
  if (seassionVal !== null) {
    let sessionObj = JSON.parse(seassionVal);
    let expiredAt = new Date(value.expiredAt);
    if (expiredAt > new Date()) { // Validate expiry date.
      return sessionObj.value;
    } else {
      localStorage.removeItem(key);
    }
  }
    return null;
}

// Set session function
function setToSession(value, inMin) {
  let expiredAt = new Date(new Date().getTime() + (60000 * inMin));
  let obj = {
    value: value,
    expiredAt: expiredAt.toISOString()
  }
  localStorage.setItem(key, JSON.stringify(obj));
}
