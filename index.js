// let count = 0;
// let text =[];
// let result = 0;
// var lengthOfLongestSubstring = function(s) {
//     count = 0;
//     text =[];
//     result = 0;
//     for(let index = 0;index<s.length;index++){
//         let point = text.indexOf(s.charAt(index));
//         if(point>-1){
//             if(result<count) result = count;
//             text = text.slice(point+1,text.length);
//             text.push(s.charAt(index));
//             count = text.length;
//         }else{
//             text.push(s.charAt(index));
//             count++;
//         }
//     }
//     return (count>result)?count:result;
// };


// let count = 0;
// let text ="";
// let result = 0;
// function lengthOfLongestSubstring (s) {
//     count = 0;
//     text ="";
//     result = 0;
//     for(let index = 0;index<s.length;index++){
//         let point = text.indexOf(s.charAt(index));
//         if(point>-1){
//             if(result<count) result = count;
//             text = text.substring(point+1,text.length);
//             text+=s.charAt(index);
//             count = text.length;
//         }else{
//             text+=s.charAt(index);
//             count++;
//         }
//     }
//     return (count>result)?count:result;
// };
// console.log(lengthOfLongestSubstring("pwwkewf"))

// function longestPalindrome(s) {

// };
// console.log(longestPalindrome("babad"))

// var reverse = function(x) {
   
//     if(x >= 2147483647 || x <= -2147483648) return 0;
//     let bit = (x<0)?-1:1;
//     x =  parseInt([...x.toString()].reverse().join(""))*bit;
//     if(x >= 2147483647 || x <= -2147483648) return 0;
//     else return x;
// };
// console.log(-1*(Math.pow(2, 31)))


// function exec(n){
//     return (n-1)*2-1
// }

// var convert = function(s, numRows) {
//     let arr = new Array(numRows).fill("",0,numRows+1);
//     let index = 0;
//     let add = 1;
//     for(let ch of s){
//         arr[index]+=ch;
//         index+=add;
//         if(index==0||index==numRows-1) add*=-1;
//     }
//     return arr.join("")
// };
// console.log(convert("ABCDE",5))
 

// var myAtoi = function(str) {
//    let result = "";
//    for(let ch of str.trim()){
//            if(isNaN(parseInt(ch))){
//                 if((ch =='+' || ch =='-') && result.length == 0){
//                     result+=ch;
//                     continue;
//                 }else{
//                     break;
//                 } 
//            }else result+=ch;     
//    }
//    result = parseInt(result);
//    if(isNaN(result)) return 0
//    if(result>=2147483647) return 2147483647
//    else if(result<=-2147483648) return -2147483648
//    return result;
// };
 
//  console.log(myAtoi(" sdf  -0012a42"))

//  console.log(parseInt("+"))
// var longestCommonPrefix = function(strs) {
//     let count = 0;
//     let result ="";
//     while(true){
//         for(let index=0;index<strs.length;index++){
            
//         }
//     }

// };
// console.log("flight".split(""))
// console.log(longestCommonPrefix(["flower","flow","flight"]));

// console.log([...[ 'f', 'l', 'o', 'w', 'e', 'r' ],...[ 'f', 'l', 'o', 'w' ],...[ 'f', 'l', 'i', 'g', 'h', 't' ]])

// console.log(new Set([ 'f','l','o','w','e','r','f','l','o','w','f','l','i','g','h','t'])); 

// const label = {
//     "{":"}",
//     "}":"{",
//     "[":"]",
//     "]":"[",
//     "(":")",
//     ")":"("
// }
// const isValid = function(s) {
//     if(s.length<=0) return true
//     let stack  = []
//     for(let cha of s){
//             if(stack.length == 0) stack.push(cha)
//             else{
//                 if(stack[stack.length-1] == label[cha]) stack.pop();
//                 else stack.push(cha)
//             }
            
//     }
//     return (stack.length==0)?true:false; 
// };
 
 
// console.log(isValid(""))
function ListNode(val) {
     this.val = val;
    this.next = null;
}
    
const   addList = function(root,val){
    if(root == null) root = new ListNode(val);
    else{
      let temp = root;
      while(temp.next !=undefined) temp=temp.next;
      temp.next = new ListNode(val);
    }
   
    return root; 
  }
// function list(){
//     this.root = null;
//     this.tail = null;
// }

// const add  = (l,val)=>{
//     if(l.root==null){
//         l.root = new ListNode(val);
//         l.tail = l.root;
//     }else{
//         l.tail.next = new ListNode(val);
//         l.tail = l.tail.next;
//     }
//     return l;
// }
// const getVal = function (list){
//     return (list == undefined)?Number.MAX_VALUE:list.val; 
// }
// const mergeTwoLists = function(l1, l2) {
//     let result = {root:null,p:null};
//     let {root,p} =result;
//     let temp = {}
//     while(l1!=undefined){
//         temp[l1.val] = (temp[l1.val]!=undefined)?++temp[l1.val]:1;
//         l1 =l1.next
//     }
//     while(l2!=undefined){
//         temp[l2.val] = (temp[l2.val]!=undefined)?++temp[l2.val]:1;
//         l2 =l2.next
//     }
//     for(let num in temp){
//         while(temp[num]-->0){
//             if(p==null) {
//                 root  = new ListNode(num);
//                 p = root;
//             }
//             else{
//                 p.next = new ListNode(num);
//                 p = p.next;
//             }
//         }
//     }
//     return root;
// };
 

// let root1 = null;
// [-9,3].forEach((element)=>{
//         root1 = addList(root1,element)
// })
 
// let root2 = null;
// [5,7].forEach((element)=>{
//         root2 = addList(root2,element)
// })
// console.log(JSON.stringify(mergeTwoLists(root1,root2)))


  //  if(bit == 0){
        //     num1 = getVal(l1);
        //     num2 = getVal(l2);
        //     if(num1<=num2){
        //         root = add(root,num1);
        //         bit = 1;
        //     }else{
        //         root = add(root,num2);
        //         bit = 2;
        //     }
            
        //  }else if(bit==1){
        //     num2 = getVal(l2);
        //     if(temp.length<=0) root = add(root,num2)
        //     else{
        //         if(temp[0]>=num2){
        //             root = add(root,temp[0]);
        //             bit = 1;
        //         }else{
        //             root = add(root,num2);
        //             bit = 2;
        //         }
        //     }
        //  }else{
        //     num1 = getVal(l1);
        //     if(temp.length<=0) root = add(root,num1)
        //     else{
        //         if(num1<=temp[0]){
        //             root = add(root,num1);
        //             bit = 1;
        //         }else{
        //             root = add(root,temp[0]);
        //             bit = 2;
        //         }
        //     }
        //  }
const printList = root => {
    while(root!=null){
            console.log(root.val)
            root = root.next
        }
}

let number = [[],[-2],[-3,-2,1]]
let root = []
number.forEach((value,index)=>{
    value.forEach(value1=>{
        root[index] = addList(root[index],value1)    
    })
    
})
// let temp = null;
// let tail = null
// let isSwap = true;
// var swapPairs = function(head) {
//     let front = head
  
//     while(front!=null){
//         isSwap ^= true
//         if(isSwap==0){
//             tail = front
//         } else{
//             temp = tail.val
//             tail.val = front.val
//             front.val = temp
//         }
//         front = front.next
//     }
//     return head
// };
 
 
//root = swapPairs(root);
 
// let result = null
// let result1  = null
// let tempPoint = null
// let count = null
// let max = 10000000
// var mergeKLists = function(lists) {
//     result = {}
//     result1 = {}
//     lists.forEach(list=>{
//         while(list!=null){
//             if(list.val<0){
//                 if(result1[max+list.val]) result1[max+list.val]++
//                 else result1[max+list.val] = 1
//             }else{
//                 if(result[list.val]) result[list.val]++
//                 else result[list.val] = 1
//             }
       
//             list=list.next
//         }
//     })
//     lists = new ListNode(null)
//     tempPoint = lists
//     for(let index in result1){
//         count = result1[index]
//         while(count-->0){
//             tempPoint.next = new ListNode(index-max)
//             tempPoint = tempPoint.next
//         }
//     }
//     for(let index in result){
//         count = result[index]
//         while(count-->0){
//             tempPoint.next = new ListNode(index)
//             tempPoint = tempPoint.next
//         } 
//     }
//     return lists.next
// };

// let re =mergeKLists(root);
// printList(re)

 
