function vacantionList (input) {
    let pageCount = Number(input[0]);
    let pagePerHour = Number(input[1]);
    let countDays = Number(input[2]);

    let completionDays = pageCount / pagePerHour;
    let result = completionDays / countDays;

    console.log(result);
}

vacantionList(["400", "45", "4"])