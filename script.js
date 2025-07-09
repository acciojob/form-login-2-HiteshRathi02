//your JS code here. If required.
document.getElementById("userForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const form = e.target;

      const firstName = form.elements["First Name"].value.trim();
      const lastName = form.elements["Last Name"].value.trim();
      const phone = form.elements["Phone Number"].value.trim();
      const email = form.elements["Email ID"].value.trim();

      const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`;
      alert(message);
    });