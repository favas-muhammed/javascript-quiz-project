class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor (questions, timeLimit, timeRemaining){

        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    
    }



        getQuestion() {
            return this.questions[this.currentQuestionIndex];
        }
          

    moveToNextQuestion() {
        this.currentQuestionIndex +=1;
    }


     shuffleQuestions()
{
    for (let i = this.questions.length - 1; i > 0; i--) {
    const b = Math.floor(Math.random() * (i + 1));
    [this.questions[i], this.questions[b]] = [this.questions[b], this.questions[i]];
}
}

checkAnswer(answer){
if(this.getQuestion().answer == answer){
    this.correctAnswers +=1;
}
        
}


    hasEnded(){
return this.currentQuestionIndex >= this.questions.length; 
}
}