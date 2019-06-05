function myFunc(arg) { //สร้างfuntion ที่มีการรับค่าตัวแปร arg
    console.log(`arg was => ${arg}`); //console.log ข้อความ agr was =>  ค่าในตัวแปร arg
  }
  
  setTimeout(myFunc, 2000, 'funky'); // เรียกใช้ setTimeout(เรียกฟังก์ชันที่สร้าง,เวลาที่Delay,กำหนดค่าให้ตัวแปรarg)