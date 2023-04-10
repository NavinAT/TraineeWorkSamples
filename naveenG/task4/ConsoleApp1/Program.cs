using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
	class Contact_Create
	{
		public Contact_Create(string name,long mobile1,long mobile2,string email) 
		{
			Name = name;
			Mobile1 = mobile1;
			Mobile2 = mobile2;
			Email = email;
		}
		public string Name { get; set; }
		public long Mobile1 { get; set; }
		public long Mobile2 { get; set; }
		public string Email { get; set; }
	}
	class Final
	{
		private static List<Contact_Create> Mycontact = new List<Contact_Create>();
		private void DisplayContact(Contact_Create contact)
		{
			Console.WriteLine($"Contact:{contact.Name},{contact.Mobile1},{contact.Mobile2},{contact.Email}");
		}
		private void DisplayContact(List<Contact_Create> contacts)
		{
			foreach(var contact in contacts)
			{
				DisplayContact(contact);
			}
		}
		public void Add(Contact_Create contact)
		{
			Mycontact.Add(contact);
		}
		public void Display(long mobile1)
		{
			var contact = Mycontact.FirstOrDefault(c => c.Mobile1 == mobile1);
			if(contact == null)
			{
				Console.WriteLine("contact not found");
			}
			else
			{
				DisplayContact(contact);
			}
		}
		public void DisplayAll()
		{
			DisplayContact(Mycontact);
		}
		public void DisplayMatching(string search)
		{
			var matchingContact = Mycontact.Where(c => c.Name.Contains(search)).ToList();
			DisplayContact(matchingContact);
		}
		public void RemoveCont()
		{

			int a = Convert.ToInt32(Console.ReadLine());
			Mycontact.RemoveAt(a);
		}
		public void updateName()
		{
			DisplayContact(Mycontact);
			Console.WriteLine("Contact index");
			int c = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine("Enter the new Contact name");
			var b = Console.ReadLine();
			if(Mycontact[c].Name != b)
			{
				Mycontact[c].Name = b;
			}
			Console.WriteLine("Contact successfully Updated");
		}
		public void updatemobile1()
		{
			Console.WriteLine("Contact index");
			int c = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine("Enter the new Contact mobile1 number");
			var b = Console.ReadLine();
			if(Mycontact[c].Mobile1 != Convert.ToInt64(b))
			{
				Mycontact[c].Mobile1 = Convert.ToInt64(b);
			}
			Console.WriteLine("Contact successfully Updated");
		}
		public void updatemobile2()
		{
			Console.WriteLine("Contact index");
			int c = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine("Enter the new Contact mobile2 number");
			var b = Console.ReadLine();
			if(Mycontact[c].Mobile2 != Convert.ToInt64(b))
			{
				Mycontact[c].Mobile2 = Convert.ToInt64(b);
			}
			Console.WriteLine("Contact successfully Updated");
		}
		public void updatemailid()
		{
			Console.WriteLine("Contact index");
			int c = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine("Enter the new Contact mailid");
			var b = Console.ReadLine();
			if(Mycontact[c].Email != b)
			{
				Mycontact[c].Email = b;
			}
			Console.WriteLine("Contact successfully Updated");
		}
	}
	class Program
	{
		static void Main(string[] args)
		{
			Console.WriteLine("Contact Book");
			Console.WriteLine("Select Menu");
			Console.WriteLine("1.Add contact");
			Console.WriteLine("2.Display contacts by number");
			Console.WriteLine("3.View all contacts");
			Console.WriteLine("4.Search a contacts for a given name");
			Console.WriteLine("5.Remove Contact");
			Console.WriteLine("6.Update the Contact name");
			Console.WriteLine("7.Update the Contact Mobile1 Number");
			Console.WriteLine("8.Update the Contact Mobile2 Number");
			Console.WriteLine("9.Update the Contact Mail id");
			Console.WriteLine("Press 'e' to exit");

			var userinput = Console.ReadLine();
			Final val = new Final();
			while(true)
			{
				switch(userinput)
				{
					case "1":
						Console.WriteLine();
						Console.WriteLine("----------------------------");
						Console.WriteLine("Enter the Contact Name");
						string name = Console.ReadLine();
						Console.WriteLine("Enter the Mobile Number");
						long mobile1 = Convert.ToInt64(Console.ReadLine());
						Console.WriteLine("Enter the Mobile Number");
						long mobile2 = Convert.ToInt64(Console.ReadLine());
						Console.WriteLine("Enter the Mail Id");
						string email = Console.ReadLine();

						var newContact = new Contact_Create(name, mobile1, mobile2, email);
						val.Add(newContact);
						break;
					case "2":
						Console.WriteLine();
						Console.WriteLine("----------------------------");
						Console.WriteLine("Display contact by number");
						long searchnum = Convert.ToInt64(Console.ReadLine());
						val.Display(searchnum);
						break;
					case "3":
						Console.WriteLine();
						Console.WriteLine("----------------------------");
						val.DisplayAll();
						break;
					case "4":
						Console.WriteLine();
						Console.WriteLine("----------------------------");
						Console.WriteLine("Name search");
						var searchusingname = Console.ReadLine();
						val.DisplayMatching(searchusingname);
						break;
					case "5":
						Console.WriteLine();
						Console.WriteLine("----------------------------");
						Console.WriteLine("remove data");
						val.RemoveCont();
						break;
					case "6":
						Console.WriteLine();
						Console.WriteLine("----------------------------");
						Console.WriteLine("Update contact name");
						val.updateName();
						break;
					case "7":
						Console.WriteLine("update contact mobile1 number");
						val.updatemobile1();
						break;
					case "8":
						Console.WriteLine("update contact mobile2 number");
						val.updatemobile2();
						break;
					case "9":
						Console.WriteLine("update contact mail id");
						val.updatemailid();
						break;
					case "e":
						Console.WriteLine();
						Console.WriteLine("----------------------------");
						Console.WriteLine("press e to exit");
						return;
					default:
						Console.WriteLine("select the valid menu");
						break;
				}
				Console.WriteLine();
				Console.WriteLine("----------------------------");
				Console.WriteLine("Select the menu");
				userinput = Console.ReadLine();
				Console.WriteLine("----------------------------");
				Console.WriteLine();
			}
		}
	}
}
