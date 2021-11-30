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
    formatEvent(event){
        return {
            name:event.name,
            startDate : `${event.start.getFullYear()}-${event.start.getMonth()+1}-${event.start.getDate()}`,
            startTime : `${event.start.getHours()}:${event.start.getMinutes()==0?'00':event.start.getMinutes()}`,
            endDate: `${event.end.getFullYear()}-${event.end.getMonth()+1}-${event.end.getDate()}`,
            endTime: `${event.end.getHours()}:${event.end.getMinutes()==0?'00':event.end.getMinutes()}`,
            color: event.color,
            id:event.id,
            userId:event.userId
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