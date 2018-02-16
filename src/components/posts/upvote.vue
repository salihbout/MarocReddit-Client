<template>
  <div>
      <el-button v-bind:type="downvoteStyle" size="mini" round><i class="el-icon-arrow-down" @click="downvote"  v-bind:disabled="isUpDisabled"></i></el-button>
                          <span class="NumberVotes">{{totalAmountUpvotes}}</span>
       <el-button  v-bind:type="upvoteStyle" size="mini" round><i class="el-icon-arrow-up" @click="upvote" v-bind:disabled="isDownDisabled"></i></el-button>
  </div>
</template>

<script>
import jwt from "jwt-simple";
import utils from "../../config/utils";
import axios from "axios";
export default {
  props: ["upvotes", "postId"],
  data() {
    return {
      upvoted: false,
      downvoted: false,
      upvoteStyle: "",
      downvoteStyle: "",
      isUpDisabled: false,
      isDownDisabled: false,
      totalAmountUpvotes: 0
    };
  },
  created() {
    if (this.$store.getters.isLoggedIn) {

      let token = utils.getToken(localStorage.getItem("token"));
      let decoded = jwt.decode(token, utils.Secret);
      let id = decoded._id

      this.totalAmountUpvotes = this.getUpvotesCountAndCurrentUpvote(
        this.upvotes,
        id
      );
    } else {
      this.totalAmountUpvotes = this.getUpvotesCountAndCurrentUpvote(
        this.upvotes,
        0
      );
    }
  },

  methods: {
    getUpvotesCountAndCurrentUpvote: function(upvotes, userId) {
      let TotalAmount = 0;
      upvotes.forEach(upvote => {
        if (userId != 0) {
          if (upvote._creator === userId) {
            let CurrentUserUpvoted = upvote.amount;
            if (CurrentUserUpvoted === 1) {
              this.upvoted = true;
              this.upvoteStyle = "success";
            } else if (CurrentUserUpvoted === -1) {
              this.downvoteStyle = "danger";
              this.upvoted = false;
            }
          }
        }

        TotalAmount += upvote.amount;
      });

      return TotalAmount;
    },

    upvote: function() {
      if (!this.upvoted) {
        this.upvoted = true;
        this.upvoteStyle = "success";
        this.downvoteStyle = "";
        this.upvotePost(1);
      } else {
        this.upvoteStyle = "";
        this.upvoted = false;
      }
    },
    downvote: function() {
      if (!this.downvoted) {
        this.downvoted = true;
        this.downvoteStyle = "danger";
        this.upvoteStyle = "";
        this.upvotePost(-1);
      } else {
        this.downvoteStyle = "";
        this.downvoted = false;
      }
    },

    upvotePost: function(voteAmount) {
      if (!this.$store.getters.isLoggedIn) {
        console.log("user not logged in ");
        this.$router.push("/login");
      } else {
        if (voteAmount == 1) {
          this.isUpDisabled = true;
        } else if (voteAmount == -1) {
          this.isDownDisabled = true;
        }

        var upvoteToSave = {
          userId: decoded._id,
          postId: this.postId,
          amount: voteAmount
        };

        axios
          .post("http://localhost:3000/api/vote/", upvoteToSave)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });

        this.btnAble = "";
      }
    }
  }
};
</script>

<style>
.NumberVotes {
  color: #409eff;
  font-size: 18px;

  padding: 5px;
}
</style>
