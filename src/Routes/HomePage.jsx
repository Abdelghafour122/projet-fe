import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ContentPasteSearch } from "@mui/icons-material";
import vitaminsSupps from "../Assets/Pictures/vitaminsSupps.webp";
import sleep from "../Assets/Pictures/sleep.webp";
import nutritionYellow from "../Assets/Pictures/nutritionYellow.webp";

import avatar1 from "../Assets/Pictures/avatar-ali.png";
import avatar2 from "../Assets/Pictures/avatar-anisha.png";
import avatar3 from "../Assets/Pictures/avatar-richard.png";
import avatar4 from "../Assets/Pictures/avatar-shanai.png";

import mentalHealth from "../Assets/Pictures/mentalHealth.webp";

const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const HomePage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, validEmail });
    setEmail("");
  };
  return (
    <Box component="section" className="landingpage">
      <Box component="section" className="homepage">
        <section className="hero container df fd-c ai-fs jc-sb">
          <Typography component="h1" variant="h1" color="text.primary">
            A Great Place To Recieve Care
          </Typography>
          <Typography variant="p" component="p" color="text.primary">
            Our clinic offers one of the best medical treatments worldwide. With
            our team of highly experienced and specialized doctors and surgeons,
            you are in very safe hands.
          </Typography>

          <Box component="section" className="button-holder df ai-c">
            <Button
              variant="contained"
              color="primary"
              disableElevation
              size="medium"
              endIcon={<ContentPasteSearch />}
              onClick={() => navigate("/appointment")}
            >
              Book an Appointment
            </Button>
            <Button
              variant="contained"
              bgcolor="primary"
              disableElevation
              size="medium"
              endIcon={<Search />}
              onClick={() => navigate("/symptoms")}
            >
              Explore the Symptoms
            </Button>
          </Box>
        </section>
      </Box>
      <Box component="section" variant="section" bgcolor="custom.secondBgColor">
        <section className="about-us container df fd-c ai-c">
          <Typography component="h1" variant="h1" color="text.primary">
            Why Choose CLINICAL
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 5 }}
            columns={{ xs: 1, sm: 4, md: 16 }}
          >
            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <div className="df fd-c ai-c info">
                <img src={sleep} alt="Sleep" />
                <Typography component="h4" variant="h4" color="text.primary">
                  Sleep Habits
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate ab, harum perferendis alias et veniam magni dolorum
                  maiores aspernatur atque odio. Obcaecati veritatis non labore
                  quaerat dolores id, illo sed.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <div className="df fd-c ai-c info">
                <img src={vitaminsSupps} alt="Vitamins and Supplemets" />
                <Typography component="h4" variant="h4" color="text.primary">
                  Vitamins and Supplemets
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate ab, harum perferendis alias et veniam magni dolorum
                  maiores aspernatur atque odio. Obcaecati veritatis non labore
                  quaerat dolores id, illo sed.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <div className="df fd-c ai-c info">
                <img src={mentalHealth} alt="Mental Health" />
                <Typography component="h4" variant="h4" color="text.primary">
                  Mental Health
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate ab, harum perferendis alias et veniam magni dolorum
                  maiores aspernatur atque odio. Obcaecati veritatis non labore
                  quaerat dolores id, illo sed.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <div className="df fd-c ai-c info">
                <img src={nutritionYellow} alt="Nutrition" />
                <Typography component="h4" variant="h4" color="text.primary">
                  Nutrition and Diet
                </Typography>
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate ab, harum perferendis alias et veniam magni dolorum
                  maiores aspernatur atque odio. Obcaecati veritatis non labore
                  quaerat dolores id, illo sed.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </section>
      </Box>
      <Box component="section" variant="section" bgcolor="custom.firstBgColor">
        <section className="impressions container">
          <Typography component="h1" variant="h1" color="text.primary">
            See Our Impressions
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 5 }}
            columns={{ xs: 1, sm: 4, md: 16 }}
          >
            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <Card component="div" className="df fd-c ai-c">
                <Rating name="read-only" value={4} readOnly size="large" />
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam veritatis nam optio quod eveniet doloremque
                  reprehenderit voluptatem quis expedita debitis voluptate,
                  quos, ut dolorum praesentium veniam quia atque. Eveniet, unde!
                </Typography>
                <Card component="div" className="df ai-c jc-sb">
                  <Avatar alt="Cindy Baker" src={avatar1} />
                  <Typography component="h5" variant="h5" color="text.primary">
                    Cindy Baker
                  </Typography>
                </Card>
              </Card>
            </Grid>

            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <Card component="div" className="df fd-c ai-c">
                <Rating name="read-only" value={4} readOnly size="large" />
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam veritatis nam optio quod eveniet doloremque
                  reprehenderit voluptatem quis expedita debitis voluptate,
                  quos, ut dolorum praesentium veniam quia atque. Eveniet, unde!
                </Typography>
                <Card component="div" className="df ai-c jc-sb">
                  <Avatar alt="Yuri Lee" src={avatar2} />
                  <Typography component="h5" variant="h5" color="text.primary">
                    Yuri Lee
                  </Typography>
                </Card>
              </Card>
            </Grid>

            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <Card component="div" className="df fd-c ai-c">
                <Rating name="read-only" value={4} readOnly size="large" />
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam veritatis nam optio quod eveniet doloremque
                  reprehenderit voluptatem quis expedita debitis voluptate,
                  quos, ut dolorum praesentium veniam quia atque. Eveniet, unde!
                </Typography>
                <Card component="div" className="df ai-c jc-sb">
                  <Avatar alt="Travis Howard" src={avatar3} />
                  <Typography component="h5" variant="h5" color="text.primary">
                    Travis Howard
                  </Typography>
                </Card>
              </Card>
            </Grid>

            <Grid item xs={1} sm={2} md={4} className="df fd-c ai-c">
              <Card component="div" className="df fd-c ai-c">
                <Rating name="read-only" value={4} readOnly size="large" />
                <Typography component="p" variant="p" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam veritatis nam optio quod eveniet doloremque
                  reprehenderit voluptatem quis expedita debitis voluptate,
                  quos, ut dolorum praesentium veniam quia atque. Eveniet, unde!
                </Typography>
                <Card component="div" className="df ai-c jc-sb">
                  <Avatar alt="Remy Sharp" src={avatar4} />
                  <Typography component="h5" variant="h5" color="text.primary">
                    Remy Sharp
                  </Typography>
                </Card>
              </Card>
            </Grid>
          </Grid>
        </section>
      </Box>
      <Box component="section" variant="section" bgcolor="custom.secondBgColor">
        <section className="signup container df fd-c ai-c ">
          <Typography component="h1" variant="h1" color="text.primary">
            Get Our Wellness Newsletter
          </Typography>
          <Typography component="p" variant="p" color="text.secondary">
            Filter out the noise and nurture your inbox with health and wellness
            advice that’s inclusive and rooted in medical expertise.
          </Typography>
          <form action="" className="df ai-c jc-sb" onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
              dir="ltr"
              type="email"
              error={email !== "" && !validEmail}
              color={validEmail ? "success" : "primary"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              helperText={email && !validEmail && "This is not an Email"}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled={!validEmail}
              onClick={handleSubmit}
            >
              Sign up
            </Button>
          </form>
        </section>
      </Box>
    </Box>
  );
};

export default HomePage;
