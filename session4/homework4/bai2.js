const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
    };
({createdBy, assignTo , dueDate} = task)
    console.log(`${createdBy} , ${assignTo} , ${dueDate}`) 