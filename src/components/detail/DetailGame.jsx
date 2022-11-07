import React, { useState } from "react";
import {
  Typography,
  Rating,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DetailGame from "../../assets/Valo_detail.png";

function FeaturedPost() {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FF0000",
    },
  });

  const [value, setValue] = useState(2);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "50vh" }}
    >
      <Card
        color="primary"
        sx={{
          display: "flex",
          width: "95%",
          height: "50%",
          backgroundColor: "common.black",
        }}
      >
        <Grid item xs={12} md={6}>
          <CardContent sx={{ flex: 1 }}>
            <Typography
              component="h2"
              variant="h3"
              textAlign="center"
              color="common.white"
            >
              Valorant
            </Typography>
            <Grid display="flex" item xs={12} md={6} sx={{ padding: "40px" }}>
              <StyledRating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Divider color="white" orientation="vertical" flexItem />
              <Typography
                component="h1"
                variant="h6"
                color="common.white"
                sx={{ paddingLeft: 1 }}
              >
                {value}
              </Typography>
              <Typography
                component="h1"
                variant="h6"
                color="common.white"
                sx={{ paddingLeft: 1 }}
              >
                FPS
              </Typography>
            </Grid>
            <Typography
              variant="body2"
              paragraph
              align="justify"
              color="common.white"
            >
              Valorant mengambil genre sebagai game First Person Shooter
              kompetitif yang wajib dimainkan secara tim. Selalu biasa dimainkan
              dalam mode 5 vs 5, konsep bermain utama di game ini sebetulnya
              benar-benar didesain mirip seperti layaknya Counter Strike. Dimana
              kamu seolah akan bermain melawan sekelompok tim yang siap
              mempertahankan atau menyerang (Attacker) salah satu titik area map
              tertentu dengan memasangkan semacam bom (di game ini disebut
              “Spike”). Sehingga ketika kamu bermain sebagai kubu yang akan
              melindungi area tersebut (Defender), kamu harus berupaya untuk
              menghentikan lawan hingga menjinakkan bom yang telah mereka
              berhasil pasang. Selain tentang konsep bermain untuk melindungi
              dan menyerang area, keberadaan sistem ekonomi untuk membeli
              senjata plus skill pun juga ikut diimplementasikan di sini.
            </Typography>
          </CardContent>
        </Grid>
        <CardMedia
          component="img"
          sx={{
            width: "50%",
            height: "auto",
          }}
          image={DetailGame}
          alt={DetailGame}
        />
      </Card>
    </Grid>
  );
}
export default FeaturedPost;
