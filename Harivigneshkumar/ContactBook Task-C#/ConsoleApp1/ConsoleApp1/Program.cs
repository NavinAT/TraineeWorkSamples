using System;
using System.Collections.Generic;

class Contact
{
    public string Name { get; set; }
    public string Phonenumber { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
}

class ContactBook
{
    public List<Contact> contacts = new List<Contact>();

    public void AddContact()
    {
        Contact contact = new Contact();

        Console.Write("Enter Name: ");
        contact.Name = Console.ReadLine();

        Console.Write("Enter Phonenumber: ");
        contact.Phonenumber = Console.ReadLine();

        bool success = long.TryParse(contact.Phonenumber, out _);
        if(success)
        {
            
        }
        else
        {
            Console.WriteLine("You Entered one is not a Number !!!");
            Console.Write("Enter Correct Phonenumber: ");
            contact.Phonenumber = Console.ReadLine();

        }

        Console.Write("Enter Email: ");
        contact.Email = Console.ReadLine();

        Console.Write("Enter Address: ");
        contact.Address = Console.ReadLine();

        contacts.Add(contact);
        Console.WriteLine("Contact added successfully!");
        Console.WriteLine("-----------------------------------------------");
    }
    public void ReadContact()
    {
        foreach(var contact in contacts)
        {
            Console.WriteLine(contact.Name);
            Console.WriteLine(contact.Phonenumber);
            Console.WriteLine(contact.Email);
            Console.WriteLine(contact.Address);
        }
        Console.WriteLine("-----------------------------------------------");
    }
    public void UpdateContact()
    {
        Console.WriteLine("Enter the number of the contact to update:");
        string phonenumber = Console.ReadLine();
        bool success = long.TryParse(phonenumber, out _);
        if(success)
        {

        }
        else
        {
            Console.WriteLine("You Entered one is not a Number !!!");
            Console.Write("Enter Correct Phonenumber: ");
            phonenumber = Console.ReadLine();

        }
        Contact contact = contacts.Find(a => a.Phonenumber == phonenumber);
        if(contact == null)
        {
            Console.WriteLine("Contact not found!");
            return;
        }

        Console.WriteLine("Select an field:");
        Console.WriteLine("1. Name");
        Console.WriteLine("2.Email");
        Console.WriteLine("3.Address");
        Console.Write(">>");
        string choice = Console.ReadLine();

        switch(choice)
        {
            case "1":
                Console.WriteLine("Enter new name :");
                string name = Console.ReadLine();
                contact.Name = name;
                Console.WriteLine("Contact updated successfully!");
                Console.WriteLine("-----------------------------------------------");
                break;
            case "2":
                Console.WriteLine("Enter new email address :");
                string email = Console.ReadLine();
                contact.Email = email;
                Console.WriteLine("Contact updated successfully!");
                Console.WriteLine("-----------------------------------------------");
                break;
            case "3":
                Console.WriteLine("Enter new  address :");
                string address = Console.ReadLine();
                contact.Address = address;
                Console.WriteLine("Contact updated successfully!");
                Console.WriteLine("-----------------------------------------------");
                break;
            default:
                Console.WriteLine("invaild choice");
                Console.WriteLine("Contact updated successfully!");
                Console.WriteLine("-----------------------------------------------");
                break;
        }
    }
    public void DeleteContact()
    {
        Console.WriteLine("Enter the number of the Contact to delete:");
        string phonenumber = Console.ReadLine();
        bool success = long.TryParse(phonenumber, out _);
        if(success)
        {

        }
        else
        {
            Console.WriteLine("You Entered one is not a Number !!!");
            Console.Write("Enter Correct Phonenumber: ");
            phonenumber = Console.ReadLine();

        }

        Contact contact = contacts.Find(a => a.Phonenumber == phonenumber);
        if(contact == null)
        {
            Console.WriteLine("Contact not found!");
            return;
        }
        contacts.Remove(contact);
        Console.WriteLine("Contact deleted successfully!");
        Console.WriteLine("-----------------------------------------------");
    }
    public void SearchContact()
    {
        Console.WriteLine("Enter the Number of the contact to Search:");
        string number = Console.ReadLine();
        bool success = long.TryParse(number, out _);
        if(success)
        {

        }
        else
        {
            Console.WriteLine("You Entered one is not a Number !!!");
            Console.Write("Enter Correct Phonenumber: ");
            number = Console.ReadLine();

        }
        Contact contact = contacts.Find(a => a.Phonenumber == number);
        if(contact == null)
        {
            Console.WriteLine("Contact not found!");
            return;
        }

        Console.WriteLine("({0}, {1}, {2}, {3})", contact.Name, contact.Phonenumber, contact.Email, contact.Address);
        Console.WriteLine("-----------------------------------------------");
    }
}
class Program
{
    static void Main(string[] args)
    {
        ContactBook myobj = new ContactBook();



        while(true)
        {
            Console.WriteLine("Select an operation:");
            Console.WriteLine("1.Add contact");
            Console.WriteLine("2.Read contact");
            Console.WriteLine("3.Update contact");
            Console.WriteLine("4.Delete contact");
            Console.WriteLine("5.Search contact");
            Console.WriteLine("6.Exit");
            Console.Write(">>");
            string choice = Console.ReadLine();
            switch(choice)
            {
                case "1":
                    myobj.AddContact();
                    break;
                case "2":
                    myobj.ReadContact();
                    break;
                case "3":
                    myobj.UpdateContact();
                    break;
                case "4":
                    myobj.DeleteContact();
                    break;
                case "5":
                    myobj.SearchContact();
                    break;
                case "6":
                    Environment.Exit(-1);
                    break;
                default:
                    Console.WriteLine("invaild choice");
                    break;
            }
            Console.WriteLine();

        }
    }
}
