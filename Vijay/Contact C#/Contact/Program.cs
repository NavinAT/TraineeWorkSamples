using System;
using System.Collections.Generic;

namespace Vijay
{
    public class Contacts
    {
        //Display Function
        public static void Display(string[][] details)
        {
            try
            {
                for (int i = 0; i < details.Length; i++)
                {
                    for (int j = 0; j < details[i].Length; j++)
                    {
                        Console.Write(details[i][j] + "\n");
                    }

                    Console.WriteLine("********************************************" + "\n");
                }
            }
            catch (Exception e)
            {
                proceed(details);
            }

        }

        //Update Function
        public static void Update(string[][] details)
        {
            Console.WriteLine("Enter the row");
            int edirow = Convert.ToInt32(Console.ReadLine());
            string[] detail = details[edirow];

            Console.WriteLine("Enter the data want to edit: ");
            string edit = Console.ReadLine();
            Console.WriteLine("********************************************" + "\n");
            if (edit == "name")
            {
                Console.WriteLine("NAME: " + detail[0]);
                Console.WriteLine("Enter the new Name: ");
                string Name = Console.ReadLine();
                detail[0] = Name;
            }
            else if (edit == "mobile")
            {
                Console.WriteLine("MOBILE: " + detail[1]);
                Console.WriteLine("Enter the new Mobile: ");
                long Mobile = Convert.ToInt64(Console.ReadLine());
                detail[1] = Convert.ToString(Mobile);
            }
            else if (edit == "mobile1")
            {
                Console.WriteLine("MOBILE1: " + detail[2]);
                Console.WriteLine("Enter the new Mobile1: ");
                long Mobile1 = Convert.ToInt64(Console.ReadLine());
                detail[2] = Convert.ToString(Mobile1);
            }
            else if (edit == "gmail")
            {
                Console.WriteLine("GMAIL: " + detail[3]);
                Console.WriteLine("Enter the new Gmail: ");
                string Gmail = Console.ReadLine();
                detail[3] = Gmail;
            }
            else if (edit == "gender")
            {
                Console.WriteLine("GENDER: " + detail[4]);
                Console.WriteLine("Enter the new Gender: ");
                string Gender = Console.ReadLine();
                detail[4] = Gender;
            }
            else if (edit == "details")
            {
                Console.WriteLine("Enter the Name:" + "\b");
                string Name = Console.ReadLine();
                Console.WriteLine("Enter the Mobile:" + "\b");
                long Mobile = Convert.ToInt64(Console.ReadLine());
                Console.WriteLine("Enter the Mobile1:" + "\b");
                long Mobile1 = Convert.ToInt64(Console.ReadLine());
                Console.WriteLine("Enter the Gmail:" + "\b");
                string Gmail = Console.ReadLine();
                Console.WriteLine("Enter the Gender:" + "\b");
                string Gender = Console.ReadLine();
                string[] display = { "NAME:" + details[0] + "\n" + "MOBILE: " + details[1] + "\n" + "MOBILE1: " + details[2] + "\n" + "GMAIL: " + details[3] + "\n" + "GENDER: " + details[4] };
                detail = display;
                // details = display;
            }
            Console.WriteLine("********************************************" + "\n");
            Console.WriteLine("NAME: " + detail[0] + "\n" + "MOBILE: " + detail[1] + "\n" + "MOBILE1: " + detail[2] + "\n" + "GMAIL: " + detail[3] + "\n" + "GENDER: " + detail[4] + "\n");
            Console.WriteLine("UPDATED SUCCESSFULLY");
            Console.WriteLine("********************************************");
            details[edirow] = detail;
            proceed(details);
        }

        //Delete Function
        public static void Delete(string[][] details)
        {
            Console.WriteLine("Enter the row");
            int delrow = Convert.ToInt32(Console.ReadLine());
            string[] detail1 = details[delrow];

            Console.WriteLine("Enter the data want to Delete: ");
            string delete = Console.ReadLine();
            Console.WriteLine("********************************************");
            List<string> list = new List<string>(detail1);
            if (delete == "name")
            {
                list.RemoveAt(0);
                list.Insert(0, "");
                detail1 = list.ToArray();
            }
            else if (delete == "mobile")
            {
                list.RemoveAt(1);
                list.Insert(1, "");
                detail1 = list.ToArray();
            }
            else if (delete == "mobile1")
            {
                list.RemoveAt(2);
                list.Insert(2, "");
                detail1 = list.ToArray();
            }
            else if (delete == "gmail")
            {
                list.RemoveAt(3);
                list.Insert(3, "");
                detail1 = list.ToArray();
            }
            else if (delete == "gender")
            {
                list.RemoveAt(4);
                list.Insert(4, "");
                detail1 = list.ToArray();
            }
            else if (delete == "details")
            {
                list.RemoveAt(0);
                list.Insert(0, "");
                list.RemoveAt(1);
                list.Insert(1, "");
                list.RemoveAt(2);
                list.Insert(2, "");
                list.RemoveAt(3);
                list.Insert(3, "");
                list.RemoveAt(4);
                list.Insert(4, "");
                detail1 = list.ToArray();
            }
            Console.WriteLine("********************************************" + "\n");
            Console.WriteLine("NAME: " + detail1[0] + "\n" + "MOBILE: " + detail1[1] + "\n" + "MOBILE1: " + detail1[2] + "\n" + "GMAIL: " + detail1[3] + "\n" + "GENDER: " + detail1[4] + "\n");
            Console.WriteLine("DELETED SUCCESSFULLY");
            Console.WriteLine("********************************************" + "\n");
            details[delrow] = detail1;
            proceed(details);
        }
        public static void Search(string[][] details)
        {
            Console.WriteLine("Enter the search value");
            string search = Console.ReadLine();
            Console.WriteLine("********************************************" + "\n");
            for (int i = 0; i < details.Length; i++)
            {
                for (int j = 0; j < details[i].Length; j++)
                {
                    if (details[i][j] == search)
                    {
                        Console.WriteLine(details[i][j]);
                        Console.WriteLine("Element found");
                        Console.WriteLine("********************************************" + "\n");
                        foreach (string k in details[i])
                        {
                            Console.WriteLine(k);
                        }

                        Console.WriteLine("********************************************" + "\n");
                        proceed(details);
                    }
                }
            }
            Console.WriteLine("********************************************" + "\n");
        }

        //Function to Choose
        public static void proceed(string[][] details)
        {
            Console.WriteLine("Function to choose");
            //Console.WriteLine("1. CREATE");
            Console.WriteLine("2. DISPLAY");
            Console.WriteLine("3. UPDATE");
            Console.WriteLine("4. DELETE");
            Console.WriteLine("5. SEARCH");
            Console.WriteLine("Choose the function that you need to do: ");
            string choose = Console.ReadLine();
            Console.WriteLine("********************************************" + "\n");

            if (choose == "2")
            {
                Display(details);
            }
            else if (choose == "3")
            {
                Update(details);
            }
            else if (choose == "4")
            {
                Delete(details);
            }
            else if (choose == "5")
            {
                Search(details);
            }
            else
            {
                Console.WriteLine("Please Enter the correct function");
                proceed(details);
            }
        }

        public static void Create()
        {
            string[][] details = new string[4][];
            for (int j = 0; j < 4; j++)
            {
                Console.WriteLine("Enter the Name: " + "\b");
                string Name = Console.ReadLine();
                Console.WriteLine("Enter the Mobile: " + "\b");
                long Mobile = Convert.ToInt64(Console.ReadLine());
                Console.WriteLine("Enter the Mobile1: " + "\b");
                long Mobile1 = Convert.ToInt64(Console.ReadLine());
                Console.WriteLine("Enter the Gmail: " + "\b");
                string Gmail = Console.ReadLine();
                Console.WriteLine("Enter the Gender: " + "\b");
                string Gender = Console.ReadLine();
                details[j] = new string[] { Name, Convert.ToString(Mobile), Convert.ToString(Mobile1), Gmail, Gender };
                Console.WriteLine("Do you want to to add another contact: ");
                var adds = Console.ReadLine();
                if (adds == "no")
                {
                    Console.WriteLine("********************************************" + "\n");
                    proceed(details);
                }
                else if (adds == "yes")
                {
                    Console.WriteLine("********************************************" + "\n");
                }
            }
            Console.WriteLine("Data Stored Successfully");
            Console.WriteLine("********************************************" + "\n");

        }
        public class Program
        {
            public static void Main(string[] args)
            {
                string[][] details = new string[4][];
                Console.WriteLine("Function to choose" + "\n");
                Console.WriteLine("1. CREATE" + "\n");
                Console.WriteLine("Choose the function that you need to do: " + "\n");
                string choose = Console.ReadLine();
                Console.WriteLine("********************************************" + "\n");
                if (choose == "1")
                {
                    Create();
                }

            }
        }
    }
}