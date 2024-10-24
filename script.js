// Display the current date at the top of the page
window.onload = function() {
    const currentDate = new Date();
    const dateString = currentDate.toDateString();
    document.getElementById('currentDate').innerText = "Today's Date: " + dateString;
};

// Handle the form submission for attendance
document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    const attendanceData = {}; // Create an object to store attendance

    // Get all checked radio buttons (attendance marked as present or absent)
    const radios = document.querySelectorAll("input[type='radio']:checked");
    radios.forEach(radio => {
        attendanceData[radio.name] = radio.value; // Store the value in the attendanceData object
    });

    // Log the attendance data to the console (for demo purposes)
    console.log(attendanceData);

    // Optionally: You can send this data to a server or use it for further processing
    alert("Attendance submitted successfully!");
});
