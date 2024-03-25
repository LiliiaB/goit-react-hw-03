import "./App.css";
import { ContactForm } from "../ContactForm/ContactForm";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";
import { Contact } from "../Contact/Contact";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
