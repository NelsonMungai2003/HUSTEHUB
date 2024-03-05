<?php
session_start();
$jid = isset($_GET['fid']) ? $_GET['fid'] : null;
 

if ($jid) {
    include '../DB_connection.php';  
    try {
        $data = 'feedback=' . $jid;
        $completed = 'Completed';
        $sql = "DELETE FROM feedbacks WHERE feedbackid=?";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$jid]);

        if ($stmt->rowCount() > 0) {
            $sm = "Mark As read successfully";
            header("Location: index.php?error=$sm&$data"); // Always exit after header redirect
            exit();
        } else {
            throw new Exception("No rows affected by the update.");
        }
    } catch (PDOException $e) {
        $em = "Error updating reading feedback: " . $e->getMessage();
        header("Location: index.php?error=$em&$data");
        exit(); // Always exit after header redirect
    } catch (Exception $e) {
        $em = "Error: " . $e->getMessage();
        header("Location: index.php?error=$em&$data");
        exit(); // Always exit after header redirect
    }
} else {
    $em = "Something went wrong";
    header("Location: index.php?error=$em&$data");
    exit(); // Always exit after header redirect
}
?>
