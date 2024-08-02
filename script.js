function showInputValue() {
    //------- solErda & Fragments array --------//
    const arr_origin_solErda  = [5,	1,	1,	1,	2,	2,	2,	3,	3,	10,	3,	3,	4,	4,	4,	4,	4,	4,	5,	15,	5,	5,	5,	5,	5,	6,	6,	6,	7,	20]
    const arr_enhance_solErda = [4,	1,	1,	1,	2,	2,	2,	3,	3,	8,	3,	3,	3,	3,	3,	3,	3,	3,	4,	12,	4,	4,	4,	4,	4,	5,	5,	5,	6,	15]
    const arr_mastery_solErda = [3,	1,	1,	1,	1,	1,	1,	2,	2,	5,	2,	2,	2,	2,	2,	2,	2,	2,	3,	8,	3,	3,	3,	3,	3,	3,	3,	3,	4,	10]
    const arr_common_solErda  = [7,	2,	2,	2,	3,	3,	3,	5,	5,	14,	5,	5,	6,	6,	6,	6,	6,	6,	7,	17,	7,	7,	7,	7,	7,	9,	9,	9,	10,	20]

    const arr_origin_Fragments  = [100, 30, 35, 40, 45, 50, 55, 60, 65, 200, 80, 90, 100, 110, 120, 130, 140, 150, 160, 350, 170, 180,190, 200, 210, 220, 230, 240, 250, 500]
    const arr_enhance_Fragments = [75, 23, 27, 30, 34, 38, 42, 45, 49, 150, 60, 68, 75, 83, 90, 98, 105, 113, 120, 263, 128, 135, 143, 150, 158, 165, 173, 180, 188, 375]
    const arr_mastery_Fragments = [50, 15, 18, 20, 23, 25, 28, 30, 33, 100, 40, 45, 50, 55, 60, 65, 70, 75, 80, 175, 85, 90, 95, 100, 105, 110, 115, 120, 125, 250]
    const arr_common_Fragments  = [125, 38, 44, 50, 57, 63, 69, 75, 82, 300, 110, 124, 138, 152, 165, 179, 193, 207, 220, 525, 234, 248, 262, 275, 289, 303, 317, 330, 344, 750]
    

    //-------totals --------//
    var total_origin_solErda   = 150;
    var total_origin_Fragments = 4500;

    var total_enhance_solErda   = 492;
    var total_enhance_Fragments = 13532;

    var total_mastery_solErda   = 166;
    var total_mastery_Fragments = 4504;

    var total_common_solErda   = 208;
    var total_common_Fragments = 6268;

    const need_solErda   = total_origin_solErda + total_enhance_solErda + total_mastery_solErda + total_common_solErda;
    const need_Fragments = total_origin_Fragments + total_enhance_Fragments + total_mastery_Fragments + total_common_Fragments;

    //------- get level value --------//
    //get origin level value
    var origin_1  = document.getElementById('origin-1').value === "" ? 0 : document.getElementById('origin-1').value;

    //get mastery level value
    var mastery_1 = document.getElementById('mastery-1').value === "" ? 0 : document.getElementById('mastery-1').value;
    var mastery_2 = document.getElementById('mastery-2').value === "" ? 0 : document.getElementById('mastery-2').value;


    //get enhance level value
    var enhance_1 = document.getElementById('enhance-1').value === "" ? 0 : document.getElementById('enhance-1').value;
    var enhance_2 = document.getElementById('enhance-2').value === "" ? 0 : document.getElementById('enhance-2').value;
    var enhance_3 = document.getElementById('enhance-3').value === "" ? 0 : document.getElementById('enhance-3').value;
    var enhance_4 = document.getElementById('enhance-4').value === "" ? 0 : document.getElementById('enhance-4').value;

    //get common level
    var common_1 = document.getElementById('common-1').value  === "" ? 0 : document.getElementById('common-1').value;

    arr_value = [origin_1, mastery_1, mastery_2, enhance_1, enhance_2, enhance_3, enhance_4, common_1]


    //-------progress calculator----------//
    //get SolErda
    const curr_origin_solErda = arr_origin_solErda.slice(0, origin_1).reduce((acc, num) => acc + num, 0);

    const curr_enhance_solErda = arr_enhance_solErda.slice(0, enhance_1).reduce((acc, num) => acc + num, 0)+ arr_enhance_solErda.slice(0, enhance_2).reduce((acc, num) => acc + num, 0) + 
    arr_enhance_solErda.slice(0, enhance_3).reduce((acc, num) => acc + num, 0) + arr_enhance_solErda.slice(0, enhance_4).reduce((acc, num) => acc + num, 0);
    
    const curr_mastery_solErda = arr_mastery_solErda.slice(0, mastery_1).reduce((acc, num) => acc + num, 0) + arr_mastery_solErda.slice(0, mastery_2).reduce((acc, num) => acc + num, 0);
    
    const curr_common_solErda = arr_common_solErda.slice(0, common_1).reduce((acc, num) => acc + num, 0);

    //get Fragments
    const curr_origin_Fragments = arr_origin_Fragments.slice(0, origin_1).reduce((acc, num) => acc + num, 0);
    
    const curr_enhance_Fragments = arr_enhance_Fragments.slice(0, origin_1).reduce((acc, num) => acc + num, 0) + arr_enhance_Fragments.slice(0, enhance_2).reduce((acc, num) => acc + num, 0) + 
    arr_enhance_Fragments.slice(0, enhance_3).reduce((acc, num) => acc + num, 0) + arr_enhance_Fragments.slice(0, enhance_4).reduce((acc, num) => acc + num, 0);
    
    const curr_mastery_Fragments = arr_mastery_Fragments.slice(0, mastery_1).reduce((acc, num) => acc + num, 0) + arr_mastery_Fragments.slice(0, mastery_2).reduce((acc, num) => acc + num, 0);
    
    const curr_common_Fragments = arr_common_Fragments.slice(0, common_1).reduce((acc, num) => acc + num, 0);
    console.log("curr_common_Fragments" + curr_common_Fragments)

    // get the result of current solErda & Fragments, progress percentage
    const curr_solErda = curr_origin_solErda + curr_enhance_solErda + curr_mastery_solErda + curr_common_solErda;
    const curr_Fragments = curr_origin_Fragments + curr_enhance_Fragments + curr_mastery_Fragments + curr_common_Fragments;

    var progressPercentage_solErda = curr_solErda / need_solErda;
    var progressPercentage_Fragments = curr_Fragments / need_Fragments;
    


    var result = document.getElementById('result');
    if (arr_value.some(element => element > 30)) {
        result.innerHTML = `你他媽輸入錯了, 檢查一下有沒有輸入超過30等`;
    } 
    else{
        result.innerHTML = `

            起源1為 ${origin_1}  等 <br><br>
            精通1為 ${mastery_1} 等 <br>
            精通2為 ${mastery_2} 等 <br><br>
            強化1為 ${enhance_1} 等 <br>
            強化2為 ${enhance_2} 等 <br>
            強化3為 ${enhance_3} 等 <br>
            強化4為 ${enhance_4} 等 <br><br>
            共通1為 ${common_1}  等 <br><br>

           
            所需靈魂愛爾達 ${need_solErda} 顆<br> 
            愛爾達碎片 ${need_Fragments} 個<br><br>
            
            一共使用了 靈魂愛爾達 ${curr_solErda} 顆, 愛爾達碎片 ${curr_Fragments} 個<br>
            還需要 靈魂愛爾達 ${need_solErda - curr_solErda} 顆 , 愛爾達碎片 ${need_Fragments- curr_Fragments} 個<br><br><br><br>
            
            ➤靈魂愛爾達進度為${progressPercentage_solErda*100} % <br>
            ➤愛爾達碎片進度為${progressPercentage_Fragments*100} % <br>
            
        `;
    }
}