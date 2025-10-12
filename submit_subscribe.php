<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pet_adoption";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    
    $sql = "INSERT INTO subscribers (email) VALUES ('$email')";
    
    if ($conn->query($sql) === TRUE) {
        echo "<!DOCTYPE html><html><head>";
        echo "<link rel='stylesheet' href='style.css'>";
        echo "<title>Success</title></head><body>";
        echo "<div style='text-align:center; padding:50px;'>";
        echo "<h1>✅ Successfully Subscribed!</h1>";
        echo "<p>Thank you for subscribing!</p>";
        echo "<p>Email: <strong>" . htmlspecialchars($email) . "</strong></p>";
        echo "<br><a href='index.html'>Go Home</a>";
        echo "</div></body></html>";
    } else {
        echo "Error: " . $conn->error;
    }
}

$conn->close();
?>
