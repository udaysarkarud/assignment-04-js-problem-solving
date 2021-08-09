/* 04. perfectFriend Start */
// function for perfectFriend Start
function perfectFriend(getFriendsName) {
    //Check invalid inputs start
    if (typeof getFriendsName != 'object') {
        const errorMessage = 'Please Enter Friends Name Into An Array'
        return errorMessage
    }
    //Check invalid inputs end

    let checkName = ''
    for (let elements of getFriendsName) {
        checkName = elements;
        if (checkName.length == 5) {
            break;
        }
    }
    return checkName;
}
// function for perfectFriend End

//Input from user for perfectFriend function
const myFriends = ['Uday', 'Amin', 'Roy', 'Amit', 'Ujjal', 'Shahid', 'Tuhin', 'Badol']

//perfectFriend function Calling and Print
const myPerfectFriendName = perfectFriend(myFriends);
console.log(myPerfectFriendName);
/* 04. perfectFriend End */