import utils from '../config/utils';
import jwt from 'jwt-simple';
export const upvoteMixin = {

    data () {
        return {
            upvoted: false,
            downvoted: false,
            upvoteStyle : '',
            downvoteStyle : '',
            isUpDisabled : false,
            isDownDisabled : false,
            
        }
       

    },


      methods : {

        upvote: function () {
  
            if(!this.upvoted){
              
              this.upvoted = true
              this.upvoteStyle = 'success';
              this.upvotePost(1)
            }else{
              this.upvoteStyle = '';
              this.upvoted = false
            }
            
      
          },
          downvote: function () {
      
           if(!this.downvoted){
              
              this.downvoted = true
              this.downvoteStyle = 'danger';
              this.upvotePost(1)
            }else{
              this.downvoteStyle = '';
              this.downvoted = false
            }
          },
      
          upvotePost : function(voteAmount){
              if(voteAmount == 1){
                this.isUpDisabled =true;
              }else if(voteAmount == -1){
                this.isDownDisabled =true;
              }
              
              var tokenStore = localStorage.getItem("token");
              
              if(tokenStore){
                var token = utils.getToken(tokenStore);
                console.log("Token from adding post : " + token);
                console.log(utils.Secret);
                var decoded = jwt.decode(token, utils.Secret);
              }else{
                console.log("user not logged in ");
                this.$router.push('/login');
              }
                
      
              var upvoteToSave = {
      
                userId : decoded._id,
                postId : this.SinglePost._id,
                amount : voteAmount
      
              }
      
              axios.post("http://localhost:3000/api/vote/", upvoteToSave).then((response)=>{
                console.log(response);
              }).catch((error) => {
                console.log(error)
              });
      
              this.btnAble = '';
          },
        
      }




}