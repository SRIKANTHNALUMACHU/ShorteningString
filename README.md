# ShorteningString
This is a program which is written from scratch for the implementation of shortening of a string<br>
The original is less than 10 characters and also lower alphabetic<br>
Shortened string is alphanumeric i.e characters can be a-z,A-Z,0-9<br>
The program is written in javascript,which can shorten a string and also the shortened string can be reversed to original string<br>
#Procedure Followed:<br>
When we generally convert a binary number(which has only two digits 0 or 1) to decimal number(which has digits 0-9)
as we're converting a number from a lowerbase (with less number of possiblity of representation) to higher base number(with higher number of possibilities of representation)
so when we're doing this opertion there is a possibility of reduction of length of string(the output string is different every different input)<br>
So,in this case when we're converting a lower alphabetic string which has only 26 character possiblities to alphanumberic string with 62 character possiblity we can have the hight probability of shortening the length of the string<br>
To convert a string from base26 to base62 or base62 to base26,the best way is converting the given string to decimal number format,then converting to required base format is the easiest way<br>
So i wrote a program which ,When a string entered into a function it first changes it into decimal number format and then another function is called which converts it to the required base format<br>

Test case 1:<br>
input:"heythere"<br>
output:"112qKqy"<br>
Test case 2:<br>
input:"112qKqy"<br>
output:"heythere"<br>
Test case 3:<br>
input:"srikanth"<br>
output:"2DEcUiJ"<br>
Test case 4:<br>
input:"2DEcUiJ"<br>
output:"srikanth"<br>


