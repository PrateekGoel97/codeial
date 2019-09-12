const nodemailer = require('../config/nodemailer');



exports.newComment = (comment) =>{
         
    let htmlString = nodemailer.renderTemplate({comment:comment},'/comments/new_comment.ejs')

    console.log('inside new comment mailer',comment);

    nodemailer.transporter.sendMail({
        from:'codeial.com',
        to: comment.user.email,
        subject:"new comment published",
        html:htmlString
    },(err,info) =>{
        if(err){
            console.log('error in sending mail',err);
            return;
        }
      //  console.log('message sent', info);
        return;
    });
}