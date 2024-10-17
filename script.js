const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    const isActive = answer.classList.contains("active");

    questions.forEach(q => {
      const ans = q.nextElementSibling;
      ans.classList.remove("active");
    });

    if (!isActive) {
      answer.classList.add("active");
    }
  });
});
