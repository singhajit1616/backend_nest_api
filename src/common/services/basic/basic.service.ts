import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicService {
  
  constructor() {}

  /**
   * Function used to calculate limit offset and page
   * @param limit 
   * @param offset 
   */
   getLimitPageAndOffset(limit, offset) {
    let page = (offset && offset > 0) ? offset : 1;
    limit = (limit) ? limit : 10;
    offset = (offset && offset > 0) ? (offset - 1) * limit : 0;
    return {
      limit: limit,
      offset: offset,
      page: page
    }
  }

  /**
   * Function used to get date changed
   * @param value 
   */
  getDateChange(value) {
    try {
      if((value.toString()).length==10)
      {
        value=value*1000;
      }
     
      let diff=0;
      let now = Math.floor(Date.now() / 1000);
      let diffIns: number = now-(value/1000);
    
      if(diffIns<=0)
        return 'Now';
      else if(diffIns<60)
        return Math.floor(diffIns)+ ' s';
      else if(diffIns<(60*60))
        return Math.floor(diffIns/(60))+ ' m';
      else if(diffIns<(60*60*24))
        return Math.floor(diffIns/(60*60)) + ' h';
      else if(diffIns<(60*60*24*2))
        return Math.floor(diffIns/(60*60*24)) + ' d';
      else if(diffIns<(60*60*24*3))
        return Math.floor(diffIns/(60*60*24)) + ' d';
      else
      {
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let convDate = new Date(parseInt(value));
        return (monthNames[(convDate.getMonth())] +' '+convDate.getDate()+', ' + convDate.getFullYear());    
      }
    } catch (error) {
      throw error
    }

  }


  /**
   * Function to check if URL is absolute
   * @param url 
   */
  checkAbsoluteURL(url) {
    return /(http(s?)):\/\//i.test(url);
  }
}
