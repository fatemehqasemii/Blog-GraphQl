import React from "react";
import sanitizeHtml from "sanitize-html";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../shared/Loader";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { Container } from "@mui/system";
import { Avatar, Grid, Typography, Box } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import CommentForm from "../comments/CommentForm";
import Comments from "../comments/Comments";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug: slug },
  });
  if (loading) return <Loader />;
  if (error) return <h3>Error...</h3>;
  console.log(data);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <ArrowBackRounded onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={7} paddingRight="20rem">
          <img
            alignItems="center"
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            width="500px"
            style={{ borderRadius: 10 }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
