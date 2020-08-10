const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: 'Victor Calebe',
        avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGBXB5Yi45R6A/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=mvLuxDtLEuwe9eLSWT-Pz9lW0LkhUjYrCHrPlha6FGU',
        whatsapp: '787778778',
        bio: 'Instrutor de Educação fisica',
    }

    classValue = {
        subject: 1,
        cost: "20",
        //proffy id vira pelo db
    }

    classScheduleValues = [
        {
            wheekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            wheekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //exeecutar func
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar dados

    //todos proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um det proffy e dados
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520
    `)

    //console.log(selectClassesSchedules)

})







