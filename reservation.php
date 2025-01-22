<html>
    <body>
        Your reservation has been sceduled <?php echo $_POST["visitor_name"]; ?><br>
        We will send you confomation to you eamil at <?php echo $_POST["visitor_email"]; ?> <br>
        And text you when your table is ready at <?php echo $_POST["visitor_phone"]; ?><br>

        Your resrvation is sceduled for <?php echo $_POST["date"]; ?> at <?php echo $_POST["time"]; ?> for <?php echo $_POST["total_adults"]; ?>
        

    </body>
</html>