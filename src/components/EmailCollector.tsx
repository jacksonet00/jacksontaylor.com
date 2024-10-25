import { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { db } from "../../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { useMutation } from "react-query";

async function _collectEmail(email: string) {
  if (!email) {
    throw new Error("No email to collect.");
  }
  await addDoc(collection(db, "emails"), {
    email,
  });
}

export default function EmailCollector() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    mutate: collectEmail
  } = useMutation({
    mutationFn: _collectEmail,
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    console.log(email);
    collectEmail(email);
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <h1>submitted.</h1>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col items-center mt-16 w-80"
      onSubmit={handleSubmit}
    >
      <div className="grid w-full max-w-sm items-center">
        <Label className="mb-1.5" htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button className="mt-4" type="submit" disabled={submitting || !email}>Submit</Button>
      </div>
    </form>
  );
}