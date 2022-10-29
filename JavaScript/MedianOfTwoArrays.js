
var findMedianSortedArrays = function (nums1, nums2){
    const totalLength = nums1.length + nums2.length;

    
    const halfWayPoint = Math.floor(totalLength / 2);

    
    let nums1Pos = 0;
    let nums2Pos = 0;
    let lastNum, secondToLastNum;

    
    for (let i = 0; i <= halfWayPoint; i++) {

        secondToLastNum = lastNum;


        if (
            nums2[nums2Pos] == undefined ||
            (nums1[nums1Pos] != undefined && nums1[nums1Pos] <= nums2[nums2Pos])
        ) {
        
            lastNum = nums1[nums1Pos];
            nums1Pos++;
        } else {
            
            lastNum = nums2[nums2Pos];
            nums2Pos++;
        }
    }


    return totalLength % 2 ? lastNum : (lastNum + secondToLastNum) / 2;
};
