import os
from notion_client import Client
from notion2md.exporter.block import MarkdownExporter
from pprint import pprint
from dotenv import load_dotenv

def notion_to_md(page_id):
    MarkdownExporter(page_id,output_path='md',download=True).export()




