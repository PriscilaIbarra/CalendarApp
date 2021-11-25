export default {
    normalizeEvents(list){
        let eventList = []
        list.forEach(e => {
            eventList.push({
                id:e.id,
                name:e.name,
                start:new Date(e.start),
                end: new Date(e.end),
                color:e.color,
                userId:e.userId
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
    }    
}