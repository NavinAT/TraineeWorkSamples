using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using static System.ActivationContext;

namespace test
{
    class contact
    {
        public string FName, LName, Company, I_Phone, Email, Address;
        //public int ID;
        public long Phone;
        static List<contact> list = new List<contact>();
        //#Menu
        static void menu()
        {
            bool a = true;
            while (a)
            {
                Console.WriteLine("-----Contact_Form_console_App-----");
                Console.WriteLine("  Operation");
                Console.WriteLine("     1.ADD");
                Console.WriteLine("     2.View");
                Console.WriteLine("     3.Search");
                Console.WriteLine("     4.Edit");
                Console.WriteLine("     5.Remove");
                Console.WriteLine("     6.Exit");
                Console.Write("Enter The Operation No To Perform:");
                int option = Convert.ToInt32(Console.ReadLine());
                if (option > 6) { option = 7; }
                if (option < 0) { option = 7; }
                switch (option)
                {
                    case 1:
                        add();
                        break;
                    case 2:
                        view();
                        break;
                    case 3:
                        search();
                        break;
                    case 4:
                        edit(list);
                        break;
                    case 5:
                        remove();
                        break;
                    case 6:
                        a = false;
                        break;

                    case 7:
                        Console.WriteLine("-----! Please Enter a valid Option-----");
                        break;
                }
            }
        }
        //#Add
        static void add()
        {
            Console.Clear();
            Console.Write("Enter The Number persons To Add:");
            int number = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("---------------------------");
            for (int i = 0; i < number; i++)
            {
                //int count = 1;
                contact person = new contact();
                //person.ID = i + count;
                Console.Write("Enter The First Name:");
                person.FName = Console.ReadLine();
                Console.Write("Enter The Last Name:");
                person.LName = Console.ReadLine();
                Console.Write("Enter The Company:");
                person.Company = Console.ReadLine();
                bool val = true;
                while (val)
                {
                    long output = 0;

                    Console.Write("Enter The Phone No:");
                    person.I_Phone = Console.ReadLine();
                    if (long.TryParse(person.I_Phone, out output))
                    {
                        person.Phone = Convert.ToInt64(person.I_Phone);
                        val = false;
                    }
                    else
                    {
                        Console.WriteLine("! Please Enter A Number With Any character");
                    }
                }
                Console.Write("Enter The Email:");
                person.Email = Console.ReadLine();
                Console.Write("Enter The Address:");
                person.Address = Console.ReadLine();
                Console.WriteLine("---------------------------");
                list.Add(person);
                Console.WriteLine("-----Contact Saved-----");
            }
        }
        //#View
        static void view()
        {
            Console.Clear();
            Console.WriteLine("The Contact list is ");
            int len = list.Count;
            Console.WriteLine("Total Contacts:" + len);
            Console.WriteLine("---------------------------");
            foreach (contact i in list)
            {
                //Console.WriteLine("S_NO : " + i.ID);
                Console.WriteLine("FName    : " + i.FName);
                Console.WriteLine("LName    : " + i.LName);
                Console.WriteLine("Company  : " + i.Company);
                Console.WriteLine("Phone    : " + i.Phone);
                Console.WriteLine("Email    : " + i.Email);
                Console.WriteLine("Address  : " + i.Address);
                Console.WriteLine("---------------------------");
            }
        }
        //#edit
        static void edit(List<contact> list)
        {
            Console.Clear();
            Console.Write("Enter The user name to Edit:");
            string edit_name = Console.ReadLine();
            Console.WriteLine("---------------------------");
            contact e_person = list.Find(name => name.FName == edit_name);
            if (edit_name == null)
            {
                Console.WriteLine("Contact Not Found");
            }
            else
            {
                Console.WriteLine("please Choose The option To Edit");
                Console.WriteLine("Options");
                Console.WriteLine("1.FName");
                Console.WriteLine("2.LName");
                Console.WriteLine("3.Company");
                Console.WriteLine("4.Phone");
                Console.WriteLine("5.Email");
                Console.WriteLine("6.Address");
                Console.WriteLine("7.Cancel");
                Console.Write("Enter The Operation No To Perform:");
                int edit_option = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("---------------------------");
                if (edit_option > 7) { edit_option = 8; }
                if (edit_option < 0) { edit_option = 8; }
                switch (edit_option)
                {
                    case 1:
                        Console.Write("Enter The New F_Name:");
                        string new_Fname = Console.ReadLine();
                        if (!string.IsNullOrWhiteSpace(new_Fname))
                        {
                            e_person.FName = new_Fname;
                            Console.WriteLine("F_Name Updated");
                        }
                        break;
                    case 2:
                        Console.Write("Enter The New L_Name:");
                        string new_LName = Console.ReadLine();
                        if (!string.IsNullOrWhiteSpace(new_LName))
                        {

                            e_person.LName = new_LName;
                            Console.WriteLine("L_Name Updated");
                        }
                        break;
                    case 3:
                        Console.Write("Enter The New Company:");
                        string new_Company = Console.ReadLine();
                        if (!string.IsNullOrWhiteSpace(new_Company))
                        {
                            e_person.Company = new_Company;
                            Console.WriteLine("Company Updated");
                        }
                        break;
                    case 4:
                        Console.Write("Enter The New Phone:");
                        long new_Phone = Convert.ToInt64(Console.ReadLine());
                        if (new_Phone != 0 && new_Phone >= 0)
                        {
                            e_person.Phone = new_Phone;
                            Console.WriteLine("Phone  Updated");
                        }
                        break;
                    case 5:
                        Console.Write("Enter The New Email:");
                        string new_Email = Console.ReadLine();
                        if (!string.IsNullOrWhiteSpace(new_Email))
                        {
                            e_person.Email = new_Email;
                            Console.WriteLine("Email Updated");
                        }
                        break;
                    case 6:
                        Console.Write("Enter The New Address:");
                        string new_Address = Console.ReadLine();
                        if (!string.IsNullOrWhiteSpace(new_Address))
                        {
                            e_person.Address = new_Address;
                            Console.WriteLine("Address Updated");
                        }
                        break;
                    case 7:
                        Console.Clear();
                        menu();

                        break;
                    case 8:
                        Console.WriteLine("----- ! Please Enter a valid Option-----");
                        Console.WriteLine("---------------------------");
                        break;
                }
            }
        }
        //#Remove
        static void remove()
        {
            Console.Clear();
            Console.WriteLine("Enter The user name to Delete:");
            string find_name = Console.ReadLine();
            Console.WriteLine("---------------------------");
            contact f_person = list.Find(name => name.FName == find_name);
            if (f_person == null)
            {
                Console.WriteLine("Contact Not Found");
            }
            else
            {
                list.Remove(f_person);
                Console.WriteLine("Contact Removed");
                Console.WriteLine("---------------------------");
            }
        }
        //#Search
        static void search()
        {
            Console.Clear();
            Console.Write("Enter The user name to find:");
            string find_name = Console.ReadLine();
            Console.WriteLine("---------------------------");
            contact f_person = list.Find(name => name.FName == find_name);
            if (f_person == null)
            {
                Console.WriteLine("Contact Not Found");
            }
            else
            {
                //Console.WriteLine("S_NO : " + f_person.ID);
                Console.WriteLine("FName    : " + f_person.FName);
                Console.WriteLine("LName    : " + f_person.LName);
                Console.WriteLine("Company  : " + f_person.Company);
                Console.WriteLine("Phone    : " + f_person.Phone);
                Console.WriteLine("Email    : " + f_person.Email);
                Console.WriteLine("Address  : " + f_person.Address);
                Console.WriteLine("---------------------------");
            }
        }
    //#main
        static void Main(string[] args)
        {
            menu();
        }
    }
}
