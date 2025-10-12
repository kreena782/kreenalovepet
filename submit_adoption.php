<?php
// Connect to database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pet_adoption";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = mysqli_real_escape_string($conn, $_POST['full_name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $address = mysqli_real_escape_string($conn, $_POST['address']);
    $preferred_pet = mysqli_real_escape_string($conn, $_POST['preferred_pet']);
    $adoption_date = mysqli_real_escape_string($conn, $_POST['adoption_date']);
    $notes = mysqli_real_escape_string($conn, $_POST['notes']);
    
    // Insert into database
    $sql = "INSERT INTO adoptions (full_name, email, phone, address, preferred_pet, adoption_date, notes) 
            VALUES ('$full_name', '$email', '$phone', '$address', '$preferred_pet', '$adoption_date', '$notes')";
    
    if ($conn->query($sql) === TRUE) {
        echo "<!DOCTYPE html><html><head>";
        echo "<link rel='stylesheet' href='style.css'>";
        echo "<title>Success</title></head><body>";
        echo "<div style='text-align:center; padding:50px;'>";
        echo "<h1>✅ Adoption Request Submitted!</h1>";
        echo "<p>Thank you, <strong>" . htmlspecialchars($full_name) . "</strong>!</p>";
        echo "<p>We will contact you at: <strong>" . htmlspecialchars($email) . "</strong></p>";
        echo "<br><a href='adopt.html'>Submit Another Request</a> | ";
        echo "<a href='index.html'>Go Home</a>";
        echo "</div></body></html>";
    } else {
        echo "Error: " . $conn->error;
    }
}

$conn->close();
?>
