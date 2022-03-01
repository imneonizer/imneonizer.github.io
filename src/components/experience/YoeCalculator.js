const getYoe = (startDate, endDate=null) => {
    const d1 = new Date(startDate);
    const d2 = endDate ? new Date(endDate): new Date();
    
    let months = d2.getMonth() - d1.getMonth() + (12 * (d2.getFullYear() - d1.getFullYear()));
    if(d2.getDate() < d2.getDate()){
      months--;
    }

    let yoe = months/12;
    
    if (yoe < 1){
      return parseInt(yoe*12) + " Months";
    }else{
      return parseFloat(yoe).toFixed(1) + " Years";
    }
}

export default getYoe;