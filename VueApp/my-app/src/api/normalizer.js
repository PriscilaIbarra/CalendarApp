export default {
    normalizeEvents(list){
        let eventList = []
        list.forEach(e => {
            eventList.push({
                id:e.id,
                name:e.name,
                start:new Date(e.start),
                end: new Date(e.end),
                color: e.color,
                timed:e.timed,
                userId: e.userId
            })
        });               
        return eventList
    },
    normalizeEvent(e){
        try
        {   
            let isoStartDate = new Date(e.startDate+'T'+e.startTime).toISOString();
            let isoEndDate = new Date(e.endDate+'T'+e.endTime).toISOString();
            let event = {
                name:e.name,
                start:isoStartDate,
                end:isoEndDate,
                color:e.color,
                timed:e.timed,
                userId:e.userId
            }
           
            return event
        }
        catch(e)
        {
          return e
        }
    },   
    formatDate(dateTime){
        //YYYY-MM-DD
        var year = dateTime.getFullYear();
        var month = (dateTime.getMonth()+1);
        var day = ( dateTime.getDate().toString().length == 1 ? ('0'+dateTime.getDate()) : dateTime.getDate() );
        return `${year}-${month}-${day}`
    },
    formatTime(dateTime){
        //HH:mm
        var hours = dateTime.getHours()
        var minutes = ( dateTime.getMinutes() == 0 ? '00' : dateTime.getMinutes() );
        return `${hours}:${minutes}`
    },
    formatEvent(event){
        return {
            name:event.name,
            startDate : this.formatDate(event.start),
            startTime : this.formatTime(event.start),
            endDate: this.formatDate(event.end),
            endTime: this.formatTime(event.end),
            color: event.color,
            timed:event.timed,
            id: event.id,
            userId: event.userId
          };
    },
    normalizeEventToUpdate(e)
    {
        try
        {   
            let isoStartDate = new Date(e.startDate+'T'+e.startTime).toISOString(); 
            let isoEndDate = new Date(e.endDate+'T'+e.endTime).toISOString(); 
            let event = {
                name:e.name,
                start:isoStartDate,
                end:isoEndDate,
                color:e.color,
                timed:e.timed,
                userId:e.userId,
                id:e.id
            }
            return event
        }
        catch(e)
        { 
          return e
        }
    }
}