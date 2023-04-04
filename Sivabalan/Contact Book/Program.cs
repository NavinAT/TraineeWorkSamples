using System;
using System.Collections;

namespace Contact
{
    class ContactPerson
    {
        public string Fname { get; set; }
        public string Lname { get; set; }
        public long Phone { get; set; }
        public string PhoneType { get; set; }
        public string Address { get; set; }
        public string EmailID { get; set; }
        public string DOB { get; set; }
        public string Relationship { get; set; }

        public ContactPerson(string fname, string lname, long phone, string phoneType, string address, string emailID, string dob, string relationship)
        {
            Fname = fname;
            Lname = lname;
            Phone = phone;
            PhoneType = phoneType;
            Address = address;
            EmailID = emailID;
            DOB = dob;
            Relationship = relationship;
        }

        public static void CreateNewContact(ArrayList contacts)
        {
            Console.Write("Enter First Name: ");
            string fname = Console.ReadLine();

            Console.Write("Enter Last Name: ");
            string lname = Console.ReadLine();

            Console.Write("Enter Phone Number: ");
            long phone = Convert.ToInt64(Console.ReadLine());

            Console.Write("Enter Phone Type: ");
            string phoneType = Console.ReadLine();

            Console.Write("Enter City: ");
            string address = Console.ReadLine();

            Console.Write("Enter E-Mail ID: ");
            string emailID = Console.ReadLine();

            Console.Write("Enter Date Of Birth: ");
            string dob = Console.ReadLine();

            Console.Write("Enter Relationship: ");
            string relationship = Console.ReadLine();

            ContactPerson newContact = new ContactPerson(fname, lname, phone, phoneType, address, emailID, dob, relationship);
            contacts.Add(newContact);
            Console.WriteLine("Contact Created Successfully!");
        }
        public static void SearchContact(ArrayList contacts)
        {
            if (contacts.Count != 0)
            {
                Console.WriteLine("Use Phone Number or E-Mail ID for Search?\n1. Phone Number\n2. E-Mail ID\n3. Want to Back");
                int selection = Convert.ToInt32(Console.ReadLine());
                switch (selection)
                {
                    case 1:
                        Console.Write("Enter the Number of the Person for Search: ");
                        long searchNumber = Convert.ToInt64(Console.ReadLine());
                        int contactNumber = 0;
                        foreach (ContactPerson contact in contacts)
                        {
                            if (contact.Phone == searchNumber)
                            {
                                Console.WriteLine($"\nFirst Name: {contact.Fname}\nLast Name: {contact.Lname}\n" +
                                    $"Phone Number: {contact.Phone}\nPhone Type: {contact.PhoneType}\nAddress: {contact.Address}\n" +
                                    $"E-Mail ID: {contact.EmailID}\nDOB: {contact.DOB}\nRelationship: {contact.Relationship}");
                                contactNumber = 1;
                                break;
                            }
                        }

                        if (contactNumber == 0)
                        {
                            Console.WriteLine("Contact not found!\nPlease Enter Correct Phone Number for Search");
                        }
                        break;

                    case 2:
                        Console.Write("Enter the E-Mail ID of the Person for Search: ");
                        string searchEmail = Console.ReadLine();
                        int contactEmail = 0;
                        foreach (ContactPerson contact in contacts)
                        {
                            if (contact.EmailID == searchEmail)
                            {
                                Console.WriteLine($"\nFirst Name: {contact.Fname}\nLast Name: {contact.Lname}\n" +
                                    $"Phone Number: {contact.Phone}\nPhone Type: {contact.PhoneType}\nAddress: {contact.Address}\n" +
                                    $"E-Mail ID: {contact.EmailID}\nDOB: {contact.DOB}\nRelationship: {contact.Relationship}");
                                contactEmail = 1;
                                break;
                            }
                        }

                        if (contactEmail == 0)
                        {
                            Console.WriteLine("Contact not found!\nPlease Enter Correct E-Mail ID for Search");
                        }
                        break;

                    case 3:
                        break;

                    default:
                        Console.WriteLine("Enter Valid Number");
                        SearchContact(contacts);
                        break;
                }
            }
            else
            {
                Console.WriteLine("\nTheir is No Contact for Search\n");
            }
        }
        public static void DeleteContact(ArrayList contacts)
        {
            if (contacts.Count != 0)
            {
                Console.WriteLine("Use Phone Number or E-Mail ID to Search for Delete?\n1. Phone Number\n2. E-Mail ID\n3. Want to Back");
                int selection = Convert.ToInt32(Console.ReadLine());
                switch (selection)
                {
                    case 1:
                        Console.WriteLine("Enter the Phone Number of the Person for Delete");
                        long searchNumber = Convert.ToInt64(Console.ReadLine());
                        ContactPerson contactToDeleteNumber = null;
                        foreach (ContactPerson contact in contacts)
                        {
                            if (contact.Phone == searchNumber)
                            {
                                contacts.Remove(contact);
                                Console.WriteLine("Contact Deleted Successfully!");
                                break;
                            }
                        }

                        if (contactToDeleteNumber == null)
                        {
                            Console.WriteLine("Contact not found!\nPlease Enter Correct Phone Number for Search");
                        }
                        break;

                    case 2:
                        Console.WriteLine("Enter the E-Mail ID of the Person for Delete");
                        string searchEmail = Console.ReadLine();
                        ContactPerson contactToDeleteEmail = null;
                        foreach (ContactPerson contact in contacts)
                        {
                            if (contact.EmailID == searchEmail)
                            {
                                contacts.Remove(contact);
                                Console.WriteLine("\nContact Deleted Successfully!");
                                break;
                            }
                        }

                        if (contactToDeleteEmail == null)
                        {
                            Console.WriteLine("\nContact not found!\nPlease Enter Correct E-Mail ID for Search");
                        }
                        break;

                    case 3:
                        break;

                    default:
                        Console.WriteLine("\nEnter Valid Number");
                        DeleteContact(contacts);
                        break;
                }
            }
            else
            {
                Console.WriteLine("\nTheir is No Contact for Delete\n");
            }
        }
        public static void UpdateContact(ArrayList contacts)
        {
            if (contacts.Count != 0)
            {
                Console.WriteLine("\nUse Phone Number or E-Mail ID to Search for Update?\n1. Phone Number\n2. E-Mail ID\n3. Want to Back");
                int selection = Convert.ToInt32(Console.ReadLine());
                ContactPerson contactToUpdate = null;
                switch (selection)
                {
                    case 1:
                        Console.WriteLine("Enter the Phone Number of the Person for Update: ");
                        long searchNumber = Convert.ToInt64(Console.ReadLine());


                        foreach (ContactPerson contact in contacts)
                        {
                            if (contact.Phone == searchNumber)
                            {
                                contactToUpdate = contact;
                                break;
                            }
                        }
                        break;

                    case 2:
                        Console.WriteLine("Enter the E-Mail ID of the Person for Update: ");
                        string searchEmail = Console.ReadLine();


                        foreach (ContactPerson contact in contacts)
                        {
                            if (contact.EmailID == searchEmail)
                            {
                                contactToUpdate = contact;
                                break;
                            }
                        }
                        break;

                    case 3:
                        break;

                    default:
                        Console.WriteLine("\nEnter Valid Number\n");
                        UpdateContact(contacts);
                        break;
                }

                if (contactToUpdate != null)
                {
                    Console.Write("Enter New First Name: ");
                    string newFname = Console.ReadLine();
                    contactToUpdate.Fname = newFname;

                    Console.Write("Enter New Last Name: ");
                    string newLname = Console.ReadLine();
                    contactToUpdate.Lname = newLname;

                    Console.Write("Enter New Phone Number: ");
                    long newPhone = Convert.ToInt64(Console.ReadLine());
                    contactToUpdate.Phone = newPhone;

                    Console.Write("Enter New Phone Type: ");
                    string newPhoneType = Console.ReadLine();
                    contactToUpdate.PhoneType = newPhoneType;

                    Console.Write("Enter New Address: ");
                    string newAddress = Console.ReadLine();
                    contactToUpdate.Address = newAddress;

                    Console.Write("Enter New E-Mail ID: ");
                    string newEmailID = Console.ReadLine();
                    contactToUpdate.EmailID = newEmailID;

                    Console.Write("Enter New DOB: ");
                    string newDOB = Console.ReadLine();
                    contactToUpdate.DOB = newDOB;

                    Console.Write("Enter New Relationship: ");
                    string newRelationship = Console.ReadLine();
                    contactToUpdate.Relationship = newRelationship;

                    Console.WriteLine("\nContact Updated Successfully!\n");
                }
                else
                {
                    Console.WriteLine("\nContact not found!\nPlease Enter Correct Value\n");
                }
            }
            else
            {
                Console.WriteLine("\nTheir is No Contact for Update\n");
            }
        }
        public static void ViewAllContacts(ArrayList contacts)
        {
            if (contacts.Count == 0)
            {
                Console.WriteLine("\nTheir is No Contact for Display\n");
            }
            else
            {
                int i = 1;
                foreach (ContactPerson contact in contacts)
                {
                    Console.WriteLine($"\nContact No: {i++}\nFirst Name: {contact.Fname}\nLast Name: {contact.Lname}\n" +
                                    $"Phone Number: {contact.Phone}\nPhone Type: {contact.PhoneType}\nAddress: {contact.Address}\n" +
                                    $"E-Mail ID: {contact.EmailID}\nDOB: {contact.DOB}\nRelationship: {contact.Relationship}\n");
                }
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            ArrayList contacts = new ArrayList();

            while (true)
            {
                Console.WriteLine("\nEnter the Option You Want Sir!");
                Console.WriteLine("1. Create New Contact");
                Console.WriteLine("2. Find a Contact");
                Console.WriteLine("3. Delete a Contact");
                Console.WriteLine("4. Update a Contact");
                Console.WriteLine("5. View all Contacts");
                Console.WriteLine("6. Exit");
                int selection = Convert.ToInt32(Console.ReadLine());

                switch (selection)
                {
                    case 1:
                        ContactPerson.CreateNewContact(contacts);
                        break;
                    case 2:
                        ContactPerson.SearchContact(contacts);
                        break;
                    case 3:
                        ContactPerson.DeleteContact(contacts);
                        break;
                    case 4:
                        ContactPerson.UpdateContact(contacts);                        
                        break;
                    case 5:
                        ContactPerson.ViewAllContacts(contacts);
                        break;
                    case 6:
                        Environment.Exit(0);
                        break;
                    default:
                        Console.WriteLine("Enter Valid Number.");
                        break;
                }
            }
        }
    }
}