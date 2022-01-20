// Students score, total possible score
// 15/20 => You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


let getStudentScore = function(studentScore, totalScore = 100) {
    let percentage = studentScore / totalScore * 100

    if (percentage >= 90) {
        let a_scoreMessage = `You got a A (${percentage}%!)`
        return a_scoreMessage

    } else if (percentage >= 80) {
        let b_scoreMessage = `You got a B (${percentage}%!)`
        return b_scoreMessage

    } else if (percentage >= 70) {
        let c_scoreMessage = `You got a C (${percentage}%!)`
        return c_scoreMessage

    } else if(percentage >= 60) {
        let d_scoreMessage = `You got a D (${percentage}%!)`
        return d_scoreMessage

    } else if(percentage <= 59) {
      let f_scoreMessage = `You got a F (${percentage}%!)`
      return f_scoreMessage

    } else {
      let errorMessage = 'Please enter your grads'
      return errorMessage
    }

}


let hossam = getStudentScore(15, 20)
console.log(hossam)
