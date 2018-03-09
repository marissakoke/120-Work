Marissa Koke, Section: Group B

[Live Sketch Link](file:///C:/Users/ris48/Desktop/Creative%20Coding/120-Work/HW-7/index.html)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
--This is a Comment Block--

Please describe what the original code is doing.

Why is it working the way it is?
What does each line do?
How can you make the ball change direction?

-->
What the original code is doing is setting up the bouncing ball animation.
Lines 3 through 6 set up the ellipse.
Lines 7 through 10 set where the ball is going to come from and the speed of it.
Lines 12 through 14 create the canvas with a width the size of the users browser and it's set to have a white background.
Lines 21 and 22 make it so the ball keeps bouncing within the canvas.
Lines 25 through 29 tell the ball to stay inside the canvas and where to bounce until the mouse is clicked.
Lines 32 and 33 create and fill the ellipse that is bouncing.
Lines 36 through 38 let the ball know once the mouse is clicked the angle of the ball will be alterd along with the path of it.

## How did you alter the sketch?

<!--
Please describe how and why you changed the sketch?
-->
How I changed the sketch was, I added in the variables let ball_color, let fill_counter, and let pos_x.
Pos_x ++ sets the ball to increment by 1 every time.
Pos_x = % bounds it to the width.
In fill_counter I have it set to == 0 to compare that if the variable, "fill_counter" is equal to 0, then the color of the ball will be random.
