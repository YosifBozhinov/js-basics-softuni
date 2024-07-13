function projectCost(input) {
  let name = input[0];
  let projectsCount = Number(input[1]);
  let projectLenght = 3;
  let result = projectsCount * projectLenght;

  console.log(
    `The architect ${name} will need ${result} hours to complete ${projectsCount} project/s.`
  );
}

projectCost(["Ivan", "4"]);
