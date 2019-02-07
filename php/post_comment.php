<!DOCTYPE html>
<html>
<body>

<?php
	$firstnameErr = $emailErr = $lastnameErr = "";
	$firstname = $email = $lastname = $comment = "";
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		  if (empty($_POST["firstname"])) {
			$firstnameErr = "firstname is required";
		  } else {
			$firstname = $_POST["firstname"];
		  }					 
		  if (empty($_POST["lastname"])) {
			$lastnameErr = "lastname is required";
		  } else {
			$lastname = $_POST["lastname"];
		  }
	}
	var data = {};
	data.firstname = "bob";
	data.lastname  = "mande";
	submitComment(data);
?>

</body>
</html>