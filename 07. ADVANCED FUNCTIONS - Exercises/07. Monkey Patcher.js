function solution(input){

    let balance = this.upvotes - this.downvotes;
    let totalVotes = this.upvotes + this.downvotes;
    
    if(input === "upvote"){
        this.upvotes ++;
    }
    else if(input === "downvote"){
        this.downvotes ++;
    }
    else if(input === "score"){
        
        let rating = "";
        if(totalVotes < 10){
            rating = "new";
        }
        else if(this.upvotes/totalVotes*100 > 66){
            rating = "hot";
        }
        else if(balance >= 0 && totalVotes > 100){
            rating = "controversial";
        }
        else if(balance < 0){
            rating = "unpopular";
        }
        else {
            rating = "new";
        }

        let addNumber = 0;
        if((this.upvotes + this.downvotes) > 50){
            let maxVotes = Math.max(this.upvotes, this.downvotes);
            addNumber = Math.ceil(maxVotes * 0.25);
        }
        let arr = [this.upvotes + addNumber, this.downvotes + addNumber, balance, rating];
        return arr;
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// console.log(score);
// solution.call(post, 'downvote');          // (executed 50 times)
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
// console.log(score);

// solution.call(post, 'upvote');
// console.log(solution.call(post, 'score'));

solution.call(post, 'upvote');
solution.call(post, 'downvote');
console.log(solution.call(post, 'score'));
