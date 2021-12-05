import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

export function NotFound() {
  return (
    <CardBox>
      <Card>
        <CardContent>
          <Title>Not Found</Title>

          <Typography variant="body2" color="text.secondary">
            User not entered or Invalid user detected. Please enter a valid
            Github username above to Live search
          </Typography>
        </CardContent>
      </Card>
    </CardBox>
  );
}

const CardBox = styled.div`
  display: grid;
  margin: auto;
  width: 50%;
`;

const Title = styled.div`
  border-bottom: 1px solid grey;
  margin-bottom: 1em;
`;
