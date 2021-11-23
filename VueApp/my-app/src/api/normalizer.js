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
}